const mongoose = require('mongoose');

const SpellSchema = new mongoose.Schema(
  {
    index: { type: String, required: true, unique: true },
    name: String,
    desc: [String],
    higher_level: [String],
    range: String,
    components: [String],
    material: String,
    ritual: Boolean,
    duration: String,
    concentration: Boolean,
    casting_time: String,
    level: Number,
    school: mongoose.Schema.Types.Mixed,
    classes: [mongoose.Schema.Types.Mixed],
    subclasses: [mongoose.Schema.Types.Mixed],
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Spell', SpellSchema);
