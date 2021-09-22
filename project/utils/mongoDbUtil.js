import { MongoClient, ObjectId } from 'mongodb';
import { mongoDBConnectionString } from './connectionStrings';

export async function connectDB() {
    const client = await MongoClient.connect(mongoDBConnectionString)
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function updatetDocumentById({client, collection, document, query}) {
    const db = client.db();
    const result = await db.collection(collection).updateOne({_id: ObjectId(query.id)}, {$set: document});
    return result;
}

export async function getAll({client, collection, sort, query}) {
    const db = client.db();
    const result = await db.collection(collection)
        .find(query)
        .sort(sort)
        .toArray();
    return result;
}

export async function getById({client, collection, query}) {
    const db = client.db();
    const result = await db.collection(collection).findOne({_id: ObjectId(query.id)});
    return result;
}
