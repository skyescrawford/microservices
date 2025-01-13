const Hapi = require('@hapi/hapi');

('use strict');

const init = async () => {
  const server = Hapi.server({
    port: 3002,
    host: '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const response = {
        message: '[Hapi] Welcome to the API',
      };
      return response;
    },
  });

  server.route({
    method: 'GET',
    path: '/check',
    handler: async (request, h) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await res.json();
      const response = {
        message: '[Hapi] Check API',
        data,
      };
      return response;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
