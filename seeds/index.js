// Require seed for Cities
const seedCities = require("./city-seeds");

// Require seed for Comments
const seedComments = require("./comment-seeds");

// Require seed for Locations
const seedLocations = require("./location-seeds");

// Require seed for LocationTags
const seedlocationTags = require("./locationTag-seeds");

// Require seed for Posts
const seedPosts = require("./post-seeds");

// Require seed for Users
const seedUsers = require("./user-seeds");

const seedTags = require("./tag-seeds");

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

  // SEED #2 - COMMENTS //
  // Start up seed file for Comments
  console.log("Sending seeds for comments now...");
  await seedComments();
  console.log("Comments have been seeded!");
  // END //

  // SEED #3 - LOCATIONS //
  // Start up seed file for Location
  console.log("Sending seeds for locations now...");
  await seedLocations();
  console.log("Locations have been seeded!");
  // END //

  console.log("Sending seeds for tags now...");
  await seedTags();
  console.log("Tags have been seeded!");

  // SEED #4 - LOCATION TAGS //
  // Start up seed file for LocationTag
  console.log("Sending seeds for location tags now... ");
  await seedlocationTags();
  console.log("Location tags have been seeded!");
  // END //

  // SEED #5 - POSTS //
  // Start up seed file for Post
  console.log("Sending seeds for posts now... ");
  await seedPosts();
  console.log("Posts have been seeded!");
  // END //

  // SEED #6 - USERS //
  // Start up seed file for User
  console.log("Sending seeds for the users now...");
  await seedUsers();
  console.log("Users have been seeded!");
  // END //

  // EXIT PROCESS
  process.exit(0);
};
// Seed All!
seedAll();
