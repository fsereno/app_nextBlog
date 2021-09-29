import { updatePost } from "../../../utils/dal";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const result = await updatePost({ id: req.body.id }, req.body);
    if (result.matchedCount > 0 || result.modifiedCount > 0) {
      res.status(200).json({ error: false });
    } else {
      res.status(500).json({ error: true });
    }
  } else {
    res.status(400).json({ error: true });
  }
}
