import { connectDB } from "../../lib/mongodb";
import Spell from "../../lib/Spell";

export default async function handler(req, res) {
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
    .limit(300)
    .select("index name level school");

  res.status(200).json(spells);
}
