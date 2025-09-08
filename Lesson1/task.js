// I have to read a file and print the message of that file
const fs = require('fs');
let filePath = './text.txt';

/* Console Line 1 */
console.log('1. Start reading file');

/* Console Line 2 */
console.log('2. readFileAsync');
function onceAsyncFuncIsDoneTriggerThisFunc(err, data) {
  if (err) {
    console.error(err);
    throw err;
  }
  let lineCount = data.toString('utf-8').split('\n').length;
  /* Console Line 3 */
  console.log('3. Data this is from readFileAsync:--', lineCount);
}
fs.readFile(filePath, onceAsyncFuncIsDoneTriggerThisFunc);

/* Console Line 4 */
console.log('4. readFileSync');
const data = fs.readFileSync(filePath, 'utf-8');
let lineCount = data.split('\n').length;

/* Console Line 5 */
console.log('5. Data this is from readFileSync:--', lineCount);

/* Console Line 6 */
console.log('6. End of reading file');
