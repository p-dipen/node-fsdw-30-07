const express = require('express');
const db = require('./src/db.js');
// ES6 use - import()
// Trigger express function it will create a `app` instance
//
const app = express();
console.log(typeof app);

app.use(express.json()); // THis function will help the express to convert the body into proper format
// Which is called as requestHandler
app.get('/', function (request, response) {
  // Where is status Code ? - By default express is sending 200 as status code
  // 2xx - is consider as good status code (successful request)
  // 4xx - is consider as something was incorrect (in request)
  // 5xx - is consider as server is doing something wrong
  db.getData().then(function (data) {
    response.contentType('application/json');
    response.send({
      success: true,
      message: 'All the notes',
      data: JSON.parse(data.toString()),
    });
  });
});

app.post('/submit', function (request, response) {
  console.log('request.body:', request.body);
  const { note } = request.body;
  console.log(request.query);
  console.log(note, request.query.id);
  try {
    db.insert(note).then(function () {
      response.send('Successfully note added');
    });
  } catch (err) {
    response.contentType('application/json');
    response.status(400).send({ success: false, message: err.message });
  }
});

app.listen(3000, function () {
  console.log(`Server is running on http://localhost:3000`);
});
