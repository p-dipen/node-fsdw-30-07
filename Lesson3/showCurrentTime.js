function showCurrentDate() {
  let date = new Date();
  console.log(
    date.getHours().toString().padStart(2, '0') +
      ':' +
      date.getMinutes().toString().padStart(2, '0') +
      ':' +
      date.getSeconds().toString().padStart(2, '0'),
  );
}

let intervalId = setInterval(showCurrentDate, 1000);
setTimeout(function () {
  clearInterval(intervalId);
}, 20000);

/* 
✅ Explanation:

new Date() gives the current date and time.

padStart(2, '0') ensures single-digit numbers show as 01, 02… instead of 1, 2….

setInterval(showCurrentTime, 1000) runs the function every second.

intervalId can be used with clearInterval(intervalId) if you want to stop it later.

setTimeout is trigger after 20 second (20000 mini-seconds) which is clearInterval of threat
*/
