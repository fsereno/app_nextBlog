import { updatePost } from '../../../utils/dal';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const post = {...req.body, featured: false}
    const update = await updatePost({id: post.id }, post);
    if (update.modifiedCount > 0) {
      res.status(200).json({error: false});
    } else {
      res.status(304).json({error: false});
    }
  } else {
    res.status(400).json({error: true});
  }
}