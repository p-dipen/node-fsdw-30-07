import { MongoClient } from 'mongodb';

class Database {
  constructor(uri, dbName) {
    // This is going to called once you intizalied the instance of this class
    this.client = new MongoClient(uri);
    this.dbName = dbName;
    this.db = null;
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log('✅ Connected to database:', this.dbName);
    } catch (err) {
      console.error('❌ Connection error:', err);
    }
  }
  async createCollection(collectionName) {
    try {
      await this.db?.createCollection(collectionName);
      console.log('✅ Collection:', collectionName);
    } catch (err) {
      console.error('❌ createCollection error:', err);
    }
  }

  selectCollection(collectionName) {
    return this.db.collection(collectionName);
  }

  async getData(collectionName) {
    try {
      const collection = this.selectCollection(collectionName);
      const result = await collection.find({}).toArray();
      console.log('✅ Data fetched:', result);
    } catch (err) {
      console.error('❌ getData error:', err);
    }
  }

  async insertData(collectionName, data) {
    try {
      const collection = this.selectCollection(collectionName);
      if (Array.isArray(data)) {
        const result = await collection.insertMany(data);
        console.log('✅ Data inserted:', result.insertedCount);
      } else {
        const result = await collection.insertOne(data);
        console.log('✅ Data inserted:', result.insertedId);
      }
    } catch (err) {
      console.error('❌ insertData error:', err);
    }
  }

  async updateData(collectionName, filter, data) {
    try {
      const collection = this.selectCollection(collectionName);
      const result = await collection.updateOne(filter, { $set: data });
      console.log('✅ Data updated:', result.modifiedCount);
    } catch (err) {
      console.error('❌ updateData error:', err);
    }
  }

  async deleteData(collectionName, filter) {
    try {
      const collection = this.selectCollection(collectionName);
      const result = await collection.deleteOne(filter);
      console.log('✅ Data deleteData:', result.deletedCount);
    } catch (err) {
      console.error('❌ deleteData error:', err);
    }
  }

  async close() {
    await this.client.close();
    console.log('✅ Connection Closed');
  }
}

export default Database;
