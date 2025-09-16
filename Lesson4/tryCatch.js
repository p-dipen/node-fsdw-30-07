const makeError = require('./newError');

try {
  // try statement
  makeError();
} catch (err) {
  // catchStatement
  console.error('Error from makeError function: ', err.message);
} finally {
  console.log(
    'THis is funally block with is going to execute what ever if it is an eror no error',
  );
}
