import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import { verifyRefreshToken, generateAccessToken, generateRefreshToken } from '@/lib/jwt';

const isProduction = process.env.NODE_ENV === 'production';

export async function POST() {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refresh_token')?.value;

    if (!refreshToken) {
        return NextResponse.json({ message: 'Refresh token requerido' }, { status: 401 });
    }

    const decoded = verifyRefreshToken(refreshToken) as any;

    if (!decoded) {
        cookieStore.delete('access_token');
        cookieStore.delete('refresh_token');
        return NextResponse.json({ message: 'Token inválido' }, { status: 403 });
    }

    try {
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });

        if (!user || !user.active) {
            return NextResponse.json({ message: 'Usuario no encontrado o inactivo' }, { status: 403 });
        }

        const newAccessToken = generateAccessToken({ id: user.id, email: user.email, role: user.role });
        const newRefreshToken = generateRefreshToken({ id: user.id });

        cookieStore.set('access_token', newAccessToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
            path: '/',
            maxAge: 15 * 60,
        });

        cookieStore.set('refresh_token', newRefreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60,
        });

        return NextResponse.json({ message: 'Token renovado' });

    } catch (error) {
        return NextResponse.json({ message: 'Error interno' }, { status: 500 });
    }
}
