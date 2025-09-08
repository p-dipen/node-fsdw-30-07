1. What is setTimeout?

setTimeout is a JavaScript function that runs a piece of code once after a specified delay.

It is asynchronous, so it doesn’t block other code.

Unlike setInterval, it runs only once unless you call it again.

2. Syntax
   let timeoutId = setTimeout(function, delay, arg1, arg2, ...);

function → The code you want to run.

delay → Time in milliseconds to wait before running the code.

arg1, arg2… → Optional arguments passed to your function.

timeoutId → A unique ID to cancel the timeout using clearTimeout(timeoutId) if needed.

3. Simple Example
   console.log("Start");

setTimeout(() => {
console.log("This runs after 3 seconds");
}, 3000);

console.log("End");

What happens here:

"Start" is printed immediately.

"End" is printed immediately after.

After 3 seconds, "This runs after 3 seconds" appears.

✅ Notice how setTimeout doesn’t block the rest of the code.

4. Key Points

setTimeout → runs once after a delay.

setInterval → runs repeatedly at regular intervals.

Both are asynchronous and allow other code to continue running.

Use clearTimeout(timeoutId) or clearInterval(intervalId) if you want to stop them.

Example: Using setTimeout to Show Current Time After 5 Seconds
setTimeout(() => {
const now = new Date();
console.log("Current Time after 5 seconds:", now.toLocaleTimeString());
}, 5000);
