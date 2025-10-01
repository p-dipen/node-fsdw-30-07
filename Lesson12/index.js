const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mydatabase';
const dbName2 = 'myFirstDb';
import Database from './Database.js';
const db = new Database(url, dbName);
const db2 = new Database(url, dbName2);
console.log(db.dbName);
console.log(db2.dbName);

async function run() {
  try {
    await db.connect();
    await db.createCollection('mysecondCollection');
    await db.getData('mycollection');
  } catch (err) {
    console.error('Error on connecting to mongodb', err);
  }
}

run();
