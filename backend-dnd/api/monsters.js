import { connectDB } from "../lib/mongodb";
import Monster from "../models/Monster";

export default async function handler(req, res) {
  try {
    await connectDB();

    const { type, name } = req.query;
    const filter = {};

    if (type && type !== "all") {
      filter.type = new RegExp(type, "i");
    }

    if (name) {
      filter.name = new RegExp(name, "i");
    }

    const monsters = await Monster.find(filter)
      .select("index name type challenge_rating")
      .limit(500);

    res.status(200).json(monsters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
