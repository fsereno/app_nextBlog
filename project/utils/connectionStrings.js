const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const database = process.env.MONGO_DB;
export const mongoDBConnectionString = `mongodb+srv://${user}:${password}@cluster0.smtwm.mongodb.net/${database}?retryWrites=true&w=majority`;
