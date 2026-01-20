import { connectDB } from "../../lib/mongodb.js";
import Spell from "../../lib/Spell.js";
import { allowCors } from "../../lib/cors.js";

export default async function handler(req, res) {
  allowCors(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    await connectDB();

    const spells = await Spell.find({})
      .select("index name level school")
      .limit(200);

    res.status(200).json(spells);
  } catch (error) {
    console.error("Spells error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}