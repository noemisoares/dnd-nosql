import { connectDB } from "../../lib/mongodb.js";
import Monster from "../../lib/Monster.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const monsters = await Monster.find({})
      .select("index name type challenge_rating")
      .limit(200);

    res.status(200).json(monsters);
  } catch (error) {
    console.error("Monsters error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
