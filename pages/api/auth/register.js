import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid request method" });
  }

  const { username, password, name, age } = req.body;

  if (!username || !password || !name || !age) {
    return res.status(422).json({ message: "Invalid input" });
  }

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");

  const existingUser = await usersCollection.findOne({ username });
  if (existingUser) {
    client.close();
    return res.status(422).json({ message: "Username already exists" });
  }

  const hashedPassword = await hashPassword(password);

  const result = await usersCollection.insertOne({
    username,
    password: hashedPassword,
    name,
    age,
  });

  client.close();

  res.status(201).json({ message: "User registered successfully" });
}
