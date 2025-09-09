function myFirst() {
  // this is a function
  myDisplayer('Hello');
}

function mySecond() {
  myDisplayer('GoodBye');
}
// Trigger my functions
// mySecond();
// myFirst();

function myDisplayer(some) {
  console.log('This is priniting from myDisplayer : - ', some);
}

// For myCalculator I want a function as argument.
// For myCalculator function, myDisplayer function is callback
// function
function myCalculator(num1, num2, myDisplayFunction) {
  let sum = num1 + num2;
  // Iam triggering the function over here
  myDisplayFunction(sum);
}
// What is the use of variable ?
// -- To store any data ?

// why i need a variable ?
// Which is a callback function ?
// myCalculator(5, 5, myDisplayer);

/* 
Note
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());

*/

// Create an array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function checkIsNeg(number) {
  let result = number > -1;
  return result;
}
// console.log('For -1 we are getting', checkIsNeg(-1));
// console.log('For 1 we are getting', checkIsNeg(1));
function removeNeg(numbers, cbFunction) {
  const myNewArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (cbFunction(numbers[i])) {
      myNewArr.push(numbers[i]);
    }
  }
  return myNewArr;
}

console.log(removeNeg(myNumbers, checkIsNeg));

// I want a function which can removePositiveNumbers from array and for conditional use a callback function
