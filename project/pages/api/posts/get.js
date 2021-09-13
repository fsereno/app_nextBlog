// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDB, getAll } from '../../../utils/mongoDbUtil';

export default async function handler(req, res) {

  let data = [];

  if (req.method === 'GET') {
    try {
      const client = await connectDB();
      data = await getAll(client, 'posts');
      res.status(200).json(data);
      client.close();
    } catch (exception) {
      res.status(500).json([]);
      client.close();
    }
  } else {
    res.status(400).json(data);
  }
}