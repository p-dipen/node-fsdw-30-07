// I have to read a file and print the message of that file
const readFile = require('./readFile');
let filePath = './text.txt';
readFile.readFileAsync(filePath);
