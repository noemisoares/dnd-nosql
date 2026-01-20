import { connectDB } from "../../lib/mongodb";
import Monster from "../../lib/Monster";

export default async function handler(req, res) {
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
    .limit(300)
    .select("index name type challenge_rating");

  res.status(200).json(monsters);
}