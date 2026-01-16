const connectMongo = require("../lib/mongodb");
const Monster = require("../lib/Monster");

module.exports = async function handler(req, res) {
  try {
    await connectMongo();

    const { type, name } = req.query;
    const filter = {};

    if (type && type !== "all") {
      filter.type = { $regex: type, $options: "i" };
    }

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    const monsters = await Monster.find(filter)
      .select("index name type challenge_rating")
      .limit(500);

    res.status(200).json(monsters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar monstros" });
  }
};
