const connectMongo = require("../lib/mongodb");
const Spell = require("../lib/Spell");

module.exports = async function handler(req, res) {
  try {
    await connectMongo();

    const { level, school, name } = req.query;
    const filter = {};

    if (typeof level !== "undefined" && level !== "all") {
      filter.level = Number(level);
    }

    if (school && school !== "all") {
      filter["school.name"] = { $regex: school, $options: "i" };
    }

    if (name) {
      filter.name = { $regex: name, $options: "i" };
    }

    const spells = await Spell.find(filter)
      .select("index name level school")
      .limit(500);

    res.status(200).json(spells);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar magias" });
  }
};
