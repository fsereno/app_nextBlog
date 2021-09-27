import { updatePost } from "../../../utils/dal";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    await updatePost({ id: req.body.id }, req.body);
    res.status(200).json({ error: false });
  } else {
    res.status(400).json({ error: true });
  }
}
