// REQUIREMENTS START //

// Require Path
const path = require("path");

// Require Express
const express = require("express");

// Require Express Session
const session = require("express-session");

// Require Handlebars
const exphbs = require("express-handlebars");

// Set up Helpers - Optional
const helpers = require("./utils/helpers");

// Set up App
const app = express();

// Set up PORT

// Set up requirement with the connection.js file we created
const PORT = process.env.PORT || 3001;

// Require Sequelize
const sequelize = require("./config/connection");

// Require Connect Session Sequelize
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Set up Session
const sess = {
  // Set up Secret Name
  secret: "Ultra Top Secret",
  // Set up Cookie
  cookie: {},
  // Set up Resave
  resave: false,
  // Set up saveUninitalized to true
  saveUninitalized: true,
  // Set up way to store via sequelize
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// App Use
app.use(session(sess));

// Create Helpers - OPTIONAL
const hbs = exphbs.create({ helpers });

// Set up engine
app.engine("handlebars", hbs.engine);
// Set up view engine
app.set("view engine", "handlebars");

// Set up App USE #1 - Express.json()
app.use(express.json());

// Set up App USE #2 - Urlencoded
app.use(express.urlencoded({ extended: false }));

// Set up App USE #3 - sets up "public" file with stylesheets and Javascript to static resources
app.use(express.static(path.join(__dirname, "public")));

// Set up App USE #4 - Controllers
app.use(require("./controllers/"));

// Sequelize Sync
sequelize.sync({ force: false }).then(() => {
  // Sets up app listen
  // With a rocket emoji because ✨ I can ✨
  app.listen(PORT, () => console.log(`Now listening on ${PORT}! 🚀`));
});
