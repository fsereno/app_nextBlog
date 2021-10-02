import { getSession } from "next-auth/client";
import { deletePostById } from "../../../../utils/dal";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: true });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.query.id;
    const result = await deletePostById({ id });
    if (result.acknowledged && result.deletedCount === 1) {
      res.status(200).json({ error: false });
    } else {
      res.status(500).json({ error: true });
    }
  } else {
    res.status(400).json({ error: true });
  }
}
