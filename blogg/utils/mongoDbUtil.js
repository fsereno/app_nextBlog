import { MongoClient } from 'mongodb';
import { mongoDBConnectionString } from './mongoDBconnectionStrings';

export async function connectDB() {

    const client = await MongoClient.connect(mongoDBConnectionString)

    return client;
}

export async function insertDocument(client, collection, document) {

    const db = client.db();
    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAll(client, collection, sort) {

    const db = client.db();
    const result = await db.collection(collection)
        .find()
        .sort(sort)
        .toArray();;

    return result;

}