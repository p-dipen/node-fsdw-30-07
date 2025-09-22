const http = require('http');

// Define the server'host and port
// What is host ? - Domain name or IP address of the your application
// Public domain - Google.com, example.com. 192.129.29.30
// Localhost - your own computer which is also known as loopback address. -> 127.0.0.1
// Only accessible by your own computer
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer(function (request, response) {
  // Request will http request(e.g. URL, headers, body etc.)
  // Response will used to send the response back to the client
  console.log(request.url);
  // This sets the content type of the response. In this case we are sending html pages.
  response.setHeader('Content-Type', 'text/html');
  // Routing
  console.log();
  if (request.method == 'GET' && request.url == '/') {
    response.statusCode = 200;
    response.end('<h1>Welcome to the homepage!</h1>');
  } else if (request.url == '/about') {
    response.statusCode = 200;
    response.end('<h1>About us </h1><p>This is a simple node.js server!</p>');
  } else {
    response.statusCode = 400;
    response.end('<h1>Page not found</h1>');
  }
});

// Start the server will listen on specific port
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});
