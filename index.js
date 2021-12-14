const express = require("express");
const mongoose = require("mongoose");
const cookieSesson = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

const keys = require("./keys/dev");
require("./models/User");
require("./models/Character");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSesson({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Route Handler
require("./routes/authRoutes")(app);
require("./routes/characterRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(PORT);
});
