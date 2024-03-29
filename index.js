const express = require('express');
const mongoose = require('mongoose');
const cookieSesson = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./keys/keys');
require('./models/User');
require('./models/Character');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSesson({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});

app.use(passport.initialize());
app.use(passport.session());

//Route Handler
require('./routes/authRoutes')(app);
require('./routes/characterRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(PORT);
});
