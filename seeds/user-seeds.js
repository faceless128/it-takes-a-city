// Require User Model
const { User, Post } = require("../models");

// Require Sequelize
const sequelize = require("../config/connection");

// Set up User Data
const userData = [
  // USER #1 //

  {
    username: "Christina",
    password: "password123",
  },

  // USER #2 //
  {
    username: "Madison",
    password: "password123",
  },

  // USER #3 //
  {
    username: "Kaijam",
    password: "password123",
  },

  // USER #4 //
  {
    username: "Konner",
    password: "password123",
  },

  // USER #5 //
  {
    username: "Matt",
    password: "password123",
  },
];

// Bulk create Users
const seedUsers = () => User.bulkCreate(userData);

// Export
module.exports = seedUsers;
