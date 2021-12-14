const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  displayName: String,
  characters: [String],
  achievement: [String],
  goldEarned: [Number],
});

mongoose.model("users", userSchema);
