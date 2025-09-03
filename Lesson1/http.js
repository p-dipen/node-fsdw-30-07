/* Internal Module using require */
const http = require('http');

const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello FSDW');
});

server.listen(8080, 'localhost', function () {
  console.log('Server is running at http://localhost:8080');
});
//port
