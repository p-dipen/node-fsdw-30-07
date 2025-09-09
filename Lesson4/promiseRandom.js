const promise = new Promise(function (resolve, reject) {
  console.log('My promise get triggered');
  // over here you can define async function
  // Any async function
  setTimeout(function () {
    resolve('Done');
  }, 2000);
});
// Does I trigger the promise ?
const output = promise.then(function (data) {
  console.log('Line 11', data);
  return data;
});
console.log('Line 14 : ', output);
