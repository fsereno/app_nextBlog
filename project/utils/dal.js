import { connectDB, getAll, getById, updatetDocumentById, deleteById } from "./mongoDbUtil";

export async function getPosts(query, sort) {
  return await handler(getAll, { collection: "posts", query, sort });
}

export async function getPostById(query) {
  return await handler(getById, { collection: "posts", query });
}

export async function deletePostById(query) {
  return await handler(deleteById, { collection: "posts", query });
}

export async function updatePost(query, document) {
  return await handler(updatetDocumentById, {
    collection: "posts",
    document,
    query,
  });
}

async function handler(deligate, args) {
  let result;
  try {
    const client = await connectDB();
    result = await deligate({ ...args, client });
    client.close();
  } catch (error) {
    console.error(error.message);
  }
  return result;
}
