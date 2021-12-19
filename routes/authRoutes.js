const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/homework");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    res.redirect("/");
  });

  // save progress User
  app.patch("/api/current_user/save", async (req, res) => {
    const { top, bottom, totalGold } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $addToSet: { achievement: top + "/" + bottom, goldEarned: totalGold },
        },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // edit display name
  app.patch("/api/current_user/name", async (req, res) => {
    const newName = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          displayName: newName,
        },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
