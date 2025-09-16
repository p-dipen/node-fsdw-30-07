// console.log(process.argv);
const fs = require('fs/promises');
const DB_PATH = './data/db.json';
// Get Data from db
function getData() {
  // What is happening over here ?
  return fs.readFile(DB_PATH);
}
function saveDB(data) {
  // 4. Function get triggered
  return fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
function parseData(databaseData, note) {
  console.log('databaseData -- ', databaseData);
  // 3. Funtion get triggered
  var db = JSON.parse(databaseData);
  db.notes.push(note);
  return db;
}
function insert(note) {
  if (note == '') {
    throw new Error('Data is null');
  }
  // 2. Function is triggered
  return getData()
    .then(function (data) {
      return parseData(data, note);
    })
    .then(saveDB);
}
// 1. Function I am triggering
insert('New notes notes');
module.exports = { insert, getData };
