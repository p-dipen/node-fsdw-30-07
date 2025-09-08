// Internal Library which we are going to use to read a file or to interact with the system system.
const fs = require('fs');
// Async readFile
function readFileAsync(filePath) {
  console.log('readFileAsync');
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.error(err);
      throw err;
    }
    let lineCount = data.toString('utf-8').split('\n').length;
    console.log('Data this is from readFileAsync:--', lineCount);
  });
}

function readFileSync(filePath) {
  /* Sync of try catch block */
  // try {

  // } catch (err) {

  // }
  console.log('readFileSync');
  const data = fs.readFileSync(filePath, 'utf-8');
  let lineCount = data.split('\n').length;
  console.log('Data this is from readFileSync:--', lineCount);
}

module.exports = { readFileAsync, readFileSync };
