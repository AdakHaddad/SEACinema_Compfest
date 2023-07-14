// import { verifyPassword } from "../../../lib/auth";
// import { connectToDatabase } from "../../../lib/db";
// import { getSession } from "next-auth/client";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(400).json({ message: "Invalid request method" });
//   }

//   const { username, password } = req.body;

//   if (!username || !password) {
//     return res.status(422).json({ message: "Invalid input" });
//   }

//   const client = await connectToDatabase();
//   const usersCollection = client.db().collection("users");

//   const user = await usersCollection.findOne({ username });

//   if (!user) {
//     client.close();
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   const isValidPassword = await verifyPassword(password, user.password);

//   if (!isValidPassword) {
//     client.close();
//     return res.status(401).json({ message: "Invalid credentials" });
//   }

//   const session = await getSession({ req });
//   session.user = {
//     id: user._id,
//     username: user.username,
//     name: user.name,
//     age: user.age,
//   };

//   client.close();

//   res.status(200).json({ message: "Login successful", session });
// }
