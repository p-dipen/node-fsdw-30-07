// Async/await

// What is promise ?
// Javascript is single thread programming language
// Promise is running on main thread ?
// Promise is going to use webapi or os threat to run the logic.

/* Async functions */
async function f1() {
  return 1;
}
f1().then((data) => console.log(data));

async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 6000);
  });
  let value = await promise; // wait unit the promise resolves(*)
  console.log('value :', value);
  console.log('promise- ', Promise.resolve(1));
  return Promise.resolve(1);
}
f2();

// works only inside async function
