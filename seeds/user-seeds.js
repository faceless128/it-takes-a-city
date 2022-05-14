// Require User Model
const { User, Post } = require("../models");

// Require Sequelize
const sequelize = require("../config/connection");

// Set up User Data
const userData = [
  // USER #1 //

  {
    username: "Christina",
  },

  // USER #2 //
  {
    username: "Madison",
  },

  // USER #3 //
  {
    username: "Kaijam",
  },

  // USER #4 //
  {
    username: "Konner",
  },

  // USER #5 //
  {
    username: "Matt",
  },
];

// Bulk create Users
const seedUsers = () => User.bulkCreate(userData);

// Export
module.exports = seedUsers;
