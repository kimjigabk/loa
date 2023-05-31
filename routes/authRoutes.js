const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/homework');
    }
  );

  app.get('/api/logout', (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
    // res.send(req.user);
  });

  // save progress User
  app.patch('/api/current_user/save', async (req, res) => {
    const { top, bottom, totalGold } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $push: { achievement: top + '/' + bottom, goldEarned: totalGold },
        },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // edit display name
  app.patch('/api/current_user', async (req, res) => {
    const { displayName } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          displayName,
        },
        { new: true }
      );
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
