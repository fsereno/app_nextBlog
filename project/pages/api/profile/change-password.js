import { getSession } from "next-auth/client";
import { hashPassword, verifyPassword } from "../../../utils/auth";
import { connectDB } from "../../../utils/mongoDbUtil";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ error: true });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectDB();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ error: true, message: "User not found." });
    client.close();
    return;
  }

  const currentPassword = user.password;
  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({ error: true, message: "Invalid password." });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  if (result.acknowledged) {
    res.status(200).json({ error: false });
  } else {
    res.status(500).json({ error: true });
  }
  client.close();
}

export default handler;
