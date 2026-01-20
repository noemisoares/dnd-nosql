import { connectDB } from "../../lib/mongodb";
import Spell from "../../lib/Spell";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const spells = await Spell.find({})
      .select("index name level school")
      .limit(200);

    res.status(200).json(spells);
  } catch (error) {
    console.error("Spells error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}