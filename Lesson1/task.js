// I have to read a file and print the message of that file
const readFile = require('./readFile');
let filePath = './readMe.txt';
readFile.readFileAsync(filePath);
