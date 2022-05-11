// REQUIREMENTS START //

// Require Model and DataType
const { Model, DataTypes } = require("sequelize");

// Set up bcrypt
const bcrypt = require("bcrypt");
// Require Sequelize
const sequelize = require("../config/connection");

// REQUIREMENTS END //

// Create Model
class User extends Model {
  // Set up method to run on instance data
}
// Create fields/columns here
User.init({
  // Columns will go here!
});
// Export Model
module.exports = User;
