import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
  {
    index: { type: String, unique: true },
    name: String,
    type: String,
    challenge_rating: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

export default mongoose.models.Monster ||
  mongoose.model("Monster", MonsterSchema);