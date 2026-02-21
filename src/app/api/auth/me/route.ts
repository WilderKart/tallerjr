import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAccessToken } from '@/lib/jwt';
import prisma from '@/lib/prisma';

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!token) {
        return NextResponse.json({ message: 'No autenticado' }, { status: 401 });
    }

    const decoded = verifyAccessToken(token) as any;

    if (!decoded) {
        return NextResponse.json({ message: 'Token inválido' }, { status: 401 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true, role: true, active: true }
        });

        if (!user || !user.active) {
            return NextResponse.json({ message: 'Usuario no disponible' }, { status: 401 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: 'Error interno' }, { status: 500 });
    }
}
