// REQUIREMENTS START //

// Requirements for starting the connection to the database

// Require Sequelize
const Sequelize = require("sequelize");

// Require dotenv
require("dotenv").config();

// REQUIREMENTS END //

// CONNECTION START //

// Create a connection to our database
// Uses JAWSDB
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      // Database Name
      process.env.DB_NAME,
      // Database Username
      process.env.DB_USER,
      // Database Password
      process.env.DB_PW,
      {
        // Host Set Up
        host: "localhost",
        // Dialect Set Up
        dialect: "mysql",
        // Port Set Up
        port: process.env.DB_PORT,
      }
    );

// CONNECTION END //

// Export Sequelize
module.exports = sequelize;
