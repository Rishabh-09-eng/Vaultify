const express = require('express');
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()
console.log("MONGO_URI =", process.env.MONGO_URI);

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'vaultify'
const app = express()
const port = process.env.PORT || 3000;
app.use(bodyparser.json())
app.use(cors())

async function startServer() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

startServer();

app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})

app.post('/', async(req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success: true, result: findResult})
})

app.delete('/', async(req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result: findResult})
})

