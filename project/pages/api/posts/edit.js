import { getSession } from "next-auth/client";
import { updatePost } from "../../../utils/dal";

export default async function handler(req, res) {
  getSession({ req }).then(async (session) => {
    if (!session) {
      res.status(401).json({ error: true });
      return;
    }
    if (req.method === "PUT") {

      console.log("ID" + req.body.id);
      const result = await updatePost({ id: req.body.id }, req.body);
      if (
        result.matchedCount > 0 ||
        result.modifiedCount > 0 ||
        result.upsertedCount > 0
      ) {
        res.status(200).json({ error: false });
      } else {
        res.status(500).json({ error: true });
      }
    } else {
      res.status(400).json({ error: true });
    }
  });
}
