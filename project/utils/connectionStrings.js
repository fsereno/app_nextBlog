const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const database = process.env.MONGO_DB;
const url = process.env.MONGO_DB_URL;
const prefix = process.env.MONGO_DB_PREFIX;
export const mongoDBConnectionString = `${prefix}://${user}:${password}@${url}?retryWrites=true&w=majority`;
export const mongoDBConnectionString2 = `${prefix}://${user}:${password}@${url}?retryWrites=true&w=majority`;
//cluster0.smtwm.mongodb.net
//"mongodb://root:password1@node-app_mongo_1:27017"