import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET || 'supersecret_change_me_in_prod';
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET || 'supersecret_refresh_change_me_in_prod';

/**
 * Genera un Access Token (15 minutos)
 */
export const generateAccessToken = (payload: object) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

/**
 * Genera un Refresh Token (7 días)
 */
export const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

/**
 * Verifica un Access Token
 */
export const verifyAccessToken = (token: string) => {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET);
    } catch (error) {
        return null;
    }
};

/**
 * Verifica un Refresh Token
 */
export const verifyRefreshToken = (token: string) => {
    try {
        return jwt.verify(token, REFRESH_TOKEN_SECRET);
    } catch (error) {
        return null;
    }
};
