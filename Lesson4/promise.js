let firstFileName = './Files/first.txt';

const fs = require('fs/promises');
// Async func
function customReadFile(path) {
  return fs
    .readFile(path)
    .then(function (data) {
      let dataToString = data.toString();
      console.log('Inside Log CB ', dataToString);
      return dataToString;
    })
    .catch(function (err) {
      console.error(err);
      return;
    });
}

customReadFile(firstFileName)
  .then(function (data) {
    return customReadFile(data);
  })
  .then(function (data) {
    return customReadFile(data);
  });
