let firstFileName = './Files/first.txt';

const fs = require('fs/promises');
// Async func
function customReadFile(path) {
  // Returning Promise
  return fs.readFile(path);
}

try {
} catch (err) {
  console.error('Catch in block', err);
}

customReadFile(firstFileName)
  .then(function (data) {
    console.log('First then');
    return customReadFile(data.toString());
  })
  .then(function (data) {
    console.log('Second then');
    return customReadFile(data);
  })
  .catch(function (err) {
    console.error('Error from second then ', err);
  });

// .then(function (data) {
//   console.log('Second then');
//   return customReadFile(data);
// })
// .catch(function (err) {
//   console.error('Error from second then ', err);
// });
