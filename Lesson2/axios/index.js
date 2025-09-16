// visual-callback.js
const http = require('http');

function fetchApi(url, index, callback) {
  console.log(`🟡 Request ${index + 1} started: ${url}`);
  let seconds = 0;
  const timer = setInterval(() => {
    console.log(`⏳ Request ${index + 1} in progress: ${seconds}s\r`);
    seconds++;
  }, 1000);

  http
    .get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        clearInterval(timer);
        console.log(`🟢 Request ${index + 1} finished: ${url}`);
        callback(null, data);
      });
    })
    .on('error', (err) => {
      clearInterval(timer);

      callback(err);
    });
}

const urls = [
  'http://localhost:8080',
  'http://localhost:8080',
  'http://localhost:8080',
  'http://localhost:8080',
  'http://localhost:8080',
  'http://localhost:8080',
  'http://localhost:8080',
];

let results = [];
let completed = 0;

urls.forEach((url, i) => {
  fetchApi(url, i, (err, data) => {
    if (err) return console.error('❌ Error:', err);

    results[i] = data;
    completed++;

    if (completed === urls.length) {
      console.log('\n✅ All responses received!');
      console.log(results);
    }
  });
});
