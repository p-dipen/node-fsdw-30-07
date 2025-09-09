// console.log('1.Pour Cereal');
// function pourMilk() {
//   console.log('2.Pour MIlk (took 3 seconds)');
// }
// // pourMilk();
// setTimeout(pourMilk, 3000);
// console.log('3. Eat your breakfast');

let count = 10;
// setInterval - webapis(Browser provide it) (Nodejs(Env - V8 engine)- this webapis)
// If you are passing any function to a async, sync method it called a "callback function"
// Every second-
function countFn() {
  if (count > 0) {
    console.log('Count : ', count);
    count--;
  } else {
    clearInterval(intervalId);
    console.log('Counting stopped!');
  }
}
let intervalId = setInterval(countFn, 1000);

console.log('This line runs immediately');
