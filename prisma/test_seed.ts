import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

console.log('Starting seed test...');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Defined' : 'Undefined');

async function main() {
    try {
        const prisma = new PrismaClient();
        console.log('Prisma initialized successfully');
        await prisma.$disconnect();
    } catch (e) {
        console.error('Initialization error:');
        console.error(e);
    }
}

main().catch(console.error);
