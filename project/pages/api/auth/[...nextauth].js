import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { verifyPassword } from "../../../utils/auth";
import { connectDB, getDB } from "../../../utils/mongoDbUtil";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectDB();
        const db = getDB(client);
        const usersCollection = db.collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
