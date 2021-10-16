import { MongoClient, ObjectId } from "mongodb";
import { mongoDBConnectionString } from "./connectionStrings";

export function getDB(client) {
  return client.db(process.env.MONGO_DB);
}

export async function connectDB() {
  const client = await MongoClient.connect(mongoDBConnectionString);
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = getDB(client);
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function updatetDocumentById({
  client,
  collection,
  document,
  query,
}) {
  const db = getDB(client);
  const result = await db
    .collection(collection)
    .updateOne(
      { _id: ObjectId(query.id) },
      { $set: document },
      { upsert: true }
    );
  return result;
}

export async function getAll({ client, collection, sort, query }) {
  const db = getDB(client);
  const result = await db
    .collection(collection)
    .find(query)
    .sort(sort)
    .toArray();
  return result;
}

export async function getById({ client, collection, query }) {
  const db = getDB(client);
  const result = await db
    .collection(collection)
    .findOne({ _id: ObjectId(query.id) });
  return result;
}

export async function deleteById({ client, collection, query }) {
  const db = getDB(client);
  const result = await db
    .collection(collection)
    .deleteOne({ _id: ObjectId(query.id) });
  return result;
}
