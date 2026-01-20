import { connectDB } from "../../lib/mongodb.js";
import Monster from "../../lib/Monster.js";
import { allowCors } from "../../lib/cors.js";

export default async function handler(req, res) {
  allowCors(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await connectDB();

    const monsters = await Monster.find({})
      .select("index name type challenge_rating")
      .limit(200);

    res.status(200).json(monsters);
  } catch (error) {
    console.error("Monsters error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}