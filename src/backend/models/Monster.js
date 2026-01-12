const mongoose = require('mongoose');

const MonsterSchema = new mongoose.Schema(
  {
    index: { type: String, required: true, unique: true },
    name: String,
    size: String,
    type: String,
    subtype: String,
    alignment: String,
    armor_class: mongoose.Schema.Types.Mixed,
    hit_points: Number,
    hit_dice: String,
    speed: mongoose.Schema.Types.Mixed,
    strength: Number,
    dexterity: Number,
    constitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    senses: mongoose.Schema.Types.Mixed,
    languages: String,
    challenge_rating: mongoose.Schema.Types.Mixed,
    xp: Number,
    special_abilities: [mongoose.Schema.Types.Mixed],
    actions: [mongoose.Schema.Types.Mixed],
    legendary_actions: [mongoose.Schema.Types.Mixed],
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Monster', MonsterSchema);
