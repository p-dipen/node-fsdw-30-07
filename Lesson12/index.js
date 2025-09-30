const mongodb = require('mongodb');
const MongoClinet = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClinet(url);

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to mOngodb');
    const database = client.db('mydatabase');
    const collection = await database.collection('mycollection');
    const data = await collection.find({}).toArray();
    console.log('data=', data);
  } catch (err) {
    console.error('Error on connecting to mongodb', err.message);
  } finally {
    await client.close();
    console.log('Connection Closed');
  }
}

run();
