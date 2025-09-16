// console.log(process.argv);
const fs = require('fs/promises');
const DB_PATH = './data/db.json';
// Get Data from db
function getData() {
  return fs.readFile(DB_PATH);
}
function saveDB(data) {
  return fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}
function insert(note) {
  if (note == '') {
    throw new Error('Data is null');
  }
  return getData()
    .then(function (databaseData) {
      var db = JSON.parse(databaseData);
      db.notes.push(note);
      return db;
    })
    .then(saveDB);
}
insert('');
module.exports = { insert, getData };
