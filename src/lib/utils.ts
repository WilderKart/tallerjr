import bcrypt from 'bcrypt';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilidades para clases CSS con Tailwind
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const SALT_ROUNDS = 10;

/**
 * Hash de contraseña con Bcrypt
 * @param password Contraseña plana
 * @returns Hash generado
 */
export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Comparación de contraseña con Hash
 * @param password Contraseña plana
 * @param hash Hash almacenado
 * @returns Verdadero si coinciden
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(password, hash);
};
