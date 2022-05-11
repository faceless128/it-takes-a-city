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

// Const sess

// App Use

// Sequelize Sync

// App listen
