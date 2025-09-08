/* Internal Module using require */
const http = require('http');
let count = 0;
const server = http.createServer(function (request, response) {
  count++;
  console.log('CreatedServer count ', count);
  // setTimeout(function () {
  console.log('Timeout');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello FSDW');
  // }, 10000);
});

server.listen(8080, 'localhost', function () {
  console.log('Server is running at http://localhost:8080');
});
//port
