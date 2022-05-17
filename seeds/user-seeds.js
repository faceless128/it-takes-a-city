// Require User Model
const { User, Post } = require("../models");

// Require Sequelize
const sequelize = require("../config/connection");

// Set up User Data
const userData = [
  // USER #1 //

  {
    username: "Christina",
    email: "christina@ittakesacity.org",
  },

  // USER #2 //
  {
    username: "Madison",
    email: "madison@ittakesacity.org",
  },

  // USER #3 //
  {
    username: "Kaijam",
    email: "kaijam@ittakesacity.org",
  },

  // USER #4 //
  {
    username: "Konner",
    email: "konner@ittakesacity.org",
  },

  // USER #5 //
  {
    username: "Matt",
    email: "matt@ittakesacity.org",
  },
];

// Bulk create Users
const seedUsers = () => User.bulkCreate(userData);

// Export
module.exports = seedUsers;
