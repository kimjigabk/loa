const mongoose = require("mongoose");
const Character = mongoose.model("characters");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/characters/", async (req, res) => {
    const chars = await Character.find({ googleId: req.user.googleId }, "-__v");    
    res.send(chars);
  });

  //create Character
  app.post("/api/characters", async (req, res) => {
    const { characterName, itemLevel, googleId } = req.body;

    const character = new Character({
      characterName,
      itemLevel,
      googleId,
    });

    try {
      await character.save();
      user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $addToSet: { characters: character._id.toString() } }
      );
      res.send(character);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update progress
  app.patch("/api/characters/:id", async (req, res) => {
    const bp = req.body;
    try {
      char = await Character.findOne({ _id: req.params.id });
      updatedChar = await Character.findOneAndUpdate(
        { _id: req.params.id },
        { bossProgress: { ...char.bossProgress, ...bp } },
        { new: true }
      ).select("-__v");
      res.send(updatedChar);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //reset progress
  app.patch("/api/characters/", async (req, res) => {
    const ids = req.body;
    try {
      ids.map(async (id) => {
        char = await Character.findOneAndUpdate(
          { _id: id },
          { bossProgress: {} }
        );
      });
      const chars = await Character.find(
        { googleId: req.user.googleId },
        "-__v"
      );
      res.send(chars);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/characters/:id", (req, res) => {
    // Character.findOneAndDelete({ id: req.params.id }, function (err, char) {
    //   if (err) {
    //     res.status(422).send(err);
    //   } else {
    //     res.send(char);
    //   }
    // });
  });
};