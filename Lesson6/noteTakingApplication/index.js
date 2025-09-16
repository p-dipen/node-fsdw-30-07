#!/usr/bin/env node
// console.log(process.argv);
const fs = require('fs');
const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
};

function saveInFile(data) {
  console.log(typeof data);
  fs.appendFile('db.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });
}
saveInFile(newNote);
console.log('Current Note ', newNote);
