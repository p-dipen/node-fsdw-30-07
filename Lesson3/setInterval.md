1. What is setInterval?

setInterval is a JavaScript function that allows you to run a piece of code repeatedly at a fixed time interval.

It is asynchronous, meaning it doesn’t block the rest of your code from running.

It keeps running until you stop it using clearInterval.

2. Syntax
   let intervalId = setInterval(function, delay, arg1, arg2, ...);

function → The code you want to run repeatedly.

delay → Time between each run in milliseconds (1000 ms = 1 second).

arg1, arg2… → Optional arguments passed to your function.

intervalId → A unique ID for the interval so you can stop it later.

3. Simple Example
   let count = 1;

let intervalId = setInterval(() => {
console.log("Count:", count);
count++;

if (count > 5) {
clearInterval(intervalId); // Stop after 5 counts
console.log("Counting stopped!");
}
}, 1000);

console.log("This runs immediately!");

What happens here:

"This runs immediately!" is printed first (sync code runs immediately).

The function inside setInterval runs every 1 second.

When count > 5, clearInterval stops it.

4. Key Points

setInterval does not pause the program. Other code runs while it waits.

Always use clearInterval if you want to stop it; otherwise, it will run forever.

Useful for: clocks, timers, animations, or repeated API calls.
