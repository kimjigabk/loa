const mongoose = require("mongoose");
const Character = mongoose.model("characters");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/characters/", async (req, res) => {
    try {
      const chars = await Character.find(
        { googleId: req.user.googleId },
        "-__v"
      );
      res.send(chars);
    } catch (err) {
      res.status(422).send(err);
    }
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
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $addToSet: { characters: character._id.toString() } }
      );
      res.send(character);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  //edit Character info
  app.patch("/api/characters/:id", async (req, res) => {
    const { characterName, itemLevel } = req.body;

    try {
      const char = await Character.findOneAndUpdate(
        { _id: req.params.id },
        { characterName, itemLevel },
        { new: true }
      );
      res.send(char);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update Boss progress
  app.patch("/api/characters/boss/:id", async (req, res) => {
    const bp = req.body;
    try {
      const char = await Character.findOne({ _id: req.params.id });
      const updatedChar = await Character.findOneAndUpdate(
        { _id: req.params.id },
        { bossProgress: { ...char.bossProgress, ...bp } },
        { new: true }
      ).select("-__v");
      res.send(updatedChar);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update Abyss progress
  app.patch("/api/characters/abyss/:id", async (req, res) => {
    const ap = req.body;
    try {
      const updatedChar = await Character.findOneAndUpdate(
        { _id: req.params.id },
        { abyssProgress: ap },
        { new: true }
      ).select("-__v");
      res.send(updatedChar);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // update Abyss progress
  app.patch("/api/characters/guild/:id", async (req, res) => {
    const gp = req.body;
    try {
      const updatedChar = await Character.findOneAndUpdate(
        { _id: req.params.id },
        { guildProgress: gp },
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
        let char = await Character.findOneAndUpdate(
          { _id: id },
          { bossProgress: {}, abyssProgress: {}, guildProgress: {} }
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
