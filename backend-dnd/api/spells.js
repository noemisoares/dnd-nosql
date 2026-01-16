import { connectDB } from "../lib/mongodb";
import Spell from "../models/Spell";

export default async function handler(req, res) {
  try {
    await connectDB();

    const { school, name } = req.query;
    const filter = {};

    if (school && school !== "all") {
      filter["school.name"] = new RegExp(school, "i");
    }

    if (name) {
      filter.name = new RegExp(name, "i");
    }

    const spells = await Spell.find(filter)
      .select("index name level school")
      .limit(500);

    res.status(200).json(spells);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
