// Javascript, Functions are considered "First class Objects"

// Different ways to define functions in javascript:

// Function declaration
function greet(name) {
  return `hello ${name} !`;
}

// Function Expression: Assigning an anonymous function to a variable

const sayHi = function (name) {
  return `Good morning ${name}`;
};

// Arrow Functions: A more concise syntax introduced in ES6, often used for shorter, anonymous functions.
const sayBye = (name) => `Bye ${name}`;

// Calling Functions -- defining a function does not execute it. Defining it names the function and specifies what to do when the function is called.

// Calling the function actually performs the specified actions with the indicated parameters. For example :-
// console.log(greet('Dipen')); // This will work for me ?

// console.log(sayHi('Dipen')); // This will work for me ?

// console.log(sayBye('Dipen')); // This will work for me ?

// Functions are considered "First class Objects" - What we have in object ? - Methods, properties

// console.log(Object.getOwnPropertyNames(greet));
// 1
// console.log(greet('Dipen'));
// // 2
// console.log(greet.call(this, 'Man'));
// console.log(greet.apply(null, ['Chris']));
// this - keyword - scope

// Type of function IIFE- Immediately Invoked Function Expression- "iffy"

(function () {
  console.log('Trigger insde the iife');
})();

// syntax = (function (){})()
let person = ((message) => {
  console.log('Message ', message);
  return {
    getGreeting: function () {
      return message;
    },
  };
})('Hello word');
