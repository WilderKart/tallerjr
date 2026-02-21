const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Prisma initialized (JS)');
    await prisma.$disconnect();
}
main().catch(e => {
    console.error('JS Error:', e);
});
