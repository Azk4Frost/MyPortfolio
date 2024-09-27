const fastify = require('fastify')({logger:true});
const path = require('path');
const fastifyStatic = require('fastify-static');

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
})


fastify.get('/', (request, reply) => {
    reply.send('index.html');
});

fastify.listen({
    port: 3333,
})