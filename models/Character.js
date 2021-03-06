const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema({
  googleId: String,
  characterName: String,
  itemLevel: String,
  abyssProgress: Object,
  bossProgress: Object,
  guildProgress: Object
});

mongoose.model("characters", characterSchema);
