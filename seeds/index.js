// Require seed for Cities
const seedCities = require("./city-seeds");

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
  
  // SEED #1 - CITIES // 
  
  // Start up seed file for Cities
  console.log("Sending seeds for cities now...");
  await seedCities();
  console.log("Cities have been seeded!");
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
