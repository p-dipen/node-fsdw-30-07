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
    // await db.createCollection('mysecondCollection');
    // await db.getData('mycollection');

    // await db.insertData('users', [{ name: 'Alice2', age: 27 }]);

    // await db.updateData('users', { name: 'Alice2' }, { age: 26 });
    // await db.deleteData('users', { name: 'Alice2' });

    await db.close();
  } catch (err) {
    console.error('Error on connecting to mongodb', err);
  }
}

run();
