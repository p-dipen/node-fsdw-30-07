const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;
const upload = multer();

app.use(express.json());
// Global middleware that logs every request
app.use(function (request, response, next) {
  console.log(`Request made to :${request.url}`);
  next(); // Pass control to the next Middleware or route handler
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express');
});
// Get Request
app.get('/about', (req, res) => {
  res.send('About PAge');
});
// Post Request
app.post('/submit', upload.none(), (req, res) => {
  if (!req.headers['content-type']?.includes('multipart/form-data')) {
    res.status(400);
    res.send('Invalid Content-Type');
  } else {
    console.log(req.body);
    res.send('Form Submitted');
  }
});

// Post request
app.post('/submitJson', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res
      .status(400)
      .json({ success: false, message: 'name and age are required' });
  }
  res.json({
    success: true,
    message: 'Form Submited',
  });
});

//. /submit?Name=dipen&AGE=100
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
/* 


*/
