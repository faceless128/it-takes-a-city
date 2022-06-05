// REQUIREMENTS START //

// Require Path
const path = require("path");

// Require Express
const express = require("express");

// Require Handlebars
const exphbs = require("express-handlebars");

const dotenv = require("dotenv");

const http = require("http");

const logger = require("morgan");

const router = require("./controllers/index");

const { auth } = require("express-openid-connect");

dotenv.load();

// Set up App
const app = express();

// Require Sequelize
const sequelize = require("./config/connection");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
};

const PORT = process.env.PORT || 3001;
if (
  // !config.baseURL &&
  !process.env.BASE_URL &&
  process.env.PORT &&
  process.env.NODE_ENV !== "production"
) {
  config.baseURL = `http://localhost:${PORT}`;
} else {
  config.baseURL = process.env.BASE_URL;
}

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use("/", router);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {},
  });
});

http.createServer(app).listen(PORT, () => {
  console.log(`Listening on ${config.baseURL}`);
});
