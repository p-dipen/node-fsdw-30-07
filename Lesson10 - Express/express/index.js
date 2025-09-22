const express = require('express');
const app = express();
const port = 3000;

// Global middleware that logs every request
app.use(function (request, response, next) {
  console.log(`Request made to :${request.url}`);
  next(); // Pass control to the next Middleware or route handler
});

// Routes
app.get('/', function (request, response) {
  //   throw new Error('Error on code');
  //   process.exit(1÷);
  response.send('<h1>Welcome to the express homepage!</h1>');
});
// post
// app.post('/', function (request, response))

app.get('/about', function (request, response) {
  response.send('<h1>About us </h1><p>This is a express node.js server!</p>');
});

// any path excluding this above routes ?
// Catch-all route for 404 errors
app.use(function (request, response) {
  response.status(404).send('<h1>Page not found</h1>');
});

// Error-handling middleware (takes 4 arguments)
app.use(function (error, request, response, next) {
  console.error(error.stack);
  response.status(500).send('<h1>Something went wrong</h1>');
});

// Listening port and host name
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});

// Express has a concept of middleware functions

// Express handle the errors (exceptions)
