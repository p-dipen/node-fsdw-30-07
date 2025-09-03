// Internal Library which we are going to use to read a file or to interact with the system system.
const fs = require('fs');
// Async readFile
function readFileAsync(filePath) {
  console.log(filePath);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log('Data this is from readFile:--', data.toString('utf-8'));
  });
}
module.exports = { readFileAsync };
// How to export functions :---

// const data = fs.readFileSync(filePath);

// console.log('data from readFileSYnc: --', data.toString('utf-8'));

// console.log('This is line should come after readFile');
