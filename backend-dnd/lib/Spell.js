import mongoose from "mongoose";

const SpellSchema = new mongoose.Schema(
  {
    index: { type: String, unique: true },
    name: String,
    level: Number,
    school: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.models.Spell || mongoose.model("Spell", SpellSchema);