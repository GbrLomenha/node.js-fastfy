import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = fastify();

app.get('/usuario/listar', async (request, reply) => {
    const users = await prisma.usuario.findMany({
        select: {
            name: true,
            email: true
        }
    });
    return users;
})

app.listen({ port: 3000 }, (err, address) => {
    if (err) console.log(err)
    console.log(`Server listening at ${address}`);
})