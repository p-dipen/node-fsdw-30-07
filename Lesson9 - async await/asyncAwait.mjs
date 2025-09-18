import fs from 'fs/promises';
function resolveAfter2Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved promise without .then');
    }, 2000);
  });
}

// // console.log(resolveAfter2Second().then((data) => console.log(data)));
// async function doSomething() {
//   let res = await resolveAfter2Second();
//   console.log(res);
//     try {

//     }
//   let response = await throwError();
//   console.log(response);
// }
// doSomething();

// Error Handling - Promise - (async / await)
function validPath(path) {
  if (path == '') {
    throw new Error('Path is empty');
  }
  return fs.readFile(path);
}
try {
  // validPath('').then((data) => console.log(data.toString()));

  let data = await validPath('simple.txt');
  console.log(data.toString());
} catch (err) {
  console.error('Custom Error 1');
}

try {
  // validPath('').then((data) => console.log(data.toString()));

  let data = await validPath('simp.txt');
  console.log(data.toString());
} catch (err) {
  console.error('Custom Error 2');
}
