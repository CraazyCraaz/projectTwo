var express = require("express");
var oneLinerJoke = require('one-liner-joke');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// ADD ROUTES HERE
const htmlRoutes = require('./controllers/html-controller');
const accountRoutes = require('./controllers/account-controller');
const scoreRoutes = require('./controllers/highscore-controller');

app.use(htmlRoutes);
app.use(accountRoutes);
app.use(scoreRoutes);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
