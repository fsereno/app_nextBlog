import { connectDB, getAll } from './mongoDbUtil';

export async function getPosts({query, sort} = {}) {
    let posts = [];
    try {
        const client = await connectDB();
        const data = await getAll({client, collection: 'posts', query, sort});
        posts = data;
        client.close();
    } catch (error) {
        console.error(error.message);
    }
    return posts;
}