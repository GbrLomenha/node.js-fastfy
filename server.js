import fastify from 'fastify';

const app = fastify();

app.listen({ port: 3000 }, (err, address) => {
    if (err) console.log(err)
    console.log(`Server listening at ${address}`);
})