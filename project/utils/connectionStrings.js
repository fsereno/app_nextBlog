const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;
const url = process.env.MONGO_DB_URL;
const prefix = process.env.MONGO_DB_PREFIX;
export const mongoDBConnectionString = `${prefix}://${user}:${password}@${url}?retryWrites=true&w=majority`;
