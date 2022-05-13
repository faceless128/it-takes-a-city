// Require seed for Cities
const seedCity = require("./city-seeds");

// Require seed for Comments

// Require seed for Location

// Require seed for LocationTag

// Require seed for Post

// Require seed for User

// Require Sequelize
const sequelize = require("../config/connection");

// Set up Seed ALL function
const seedAll = async () => {
  await sequelize.sync({ force: true });
  // Start up seed file for Cities

  // END //

  // Start up seed file for Comments

  // END //

  // Start up seed file for Location

  // END //

  // Start up seed file for LocationTag

  // END //

  // Start up seed file for Post

  // END //

  // Start up seed file for User

  // END //
};
