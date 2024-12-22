import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = fastify();

// Rotas

// Rota para listar todos os usuários
app.get('/usuario/listar', async (request, reply) => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) { console.log(error) }
})

// Rota para cadastrar um novo usuário
app.post('/usuario/cadastrar', async (request, reply) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: request.body.name,
                email: request.body.email
            }
        })
        return user;
    } catch (error) { console.log(error) }
})

// Inicializaão do Servidor na porta 3000
app.listen({ port: 3000 }, (err, address) => {
    if (err) console.log(err)
    console.log(`Server listening at ${address}`);
})