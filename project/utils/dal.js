import { connectDB, getAll, getById} from './mongoDbUtil';

export async function getPosts(query, sort) {
    return await handler('posts', getAll, query, sort);
}

export async function getPostById(query) {
    return await handler('posts', getById, query);
}

async function handler(collection, deligate, query, sort) {
    let posts = [];
    try {
        const client = await connectDB();
        posts = await deligate({client, collection, query, sort});
        client.close();
    } catch (error) {
        console.error(error.message);
    }
    return posts;
}