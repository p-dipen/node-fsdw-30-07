// console.log('1.Pour Cereal');
// function pourMilk() {
//   console.log('2.Pour MIlk (took 3 seconds)');
// }
// // pourMilk();
// setTimeout(pourMilk, 3000);
// console.log('3. Eat your breakfast');

let count = 10;

let intervalId = setInterval(function () {
  if (count > 0) {
    console.log('Count : ', count);
    count--;
  } else {
    clearInterval(intervalId);
    console.log('Counting stopped!');
  }
}, 1000);

console.log('This line runs immediately');
