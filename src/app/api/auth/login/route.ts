import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { comparePassword } from '@/lib/utils';
import { generateAccessToken, generateRefreshToken } from '@/lib/jwt';
import { loginSchema } from '@/lib/validations';
import { z } from 'zod';

const isProduction = process.env.NODE_ENV === 'production';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = loginSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
        }

        const { email, password } = result.data;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !user.active) {
            return NextResponse.json(
                { message: 'Credenciales inválidas o cuenta inactiva' },
                { status: 401 }
            );
        }

        const isValid = await comparePassword(password, user.password);

        if (!isValid) {
            return NextResponse.json(
                { message: 'Credenciales inválidas' },
                { status: 401 }
            );
        }

        const accessToken = generateAccessToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        const refreshToken = generateRefreshToken({ id: user.id });

        const cookieStore = await cookies();

        cookieStore.set('access_token', accessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
            path: '/',
            maxAge: 15 * 60, // 15m
        });

        cookieStore.set('refresh_token', refreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60, // 7d
        });

        return NextResponse.json({
            message: 'Login exitoso',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
