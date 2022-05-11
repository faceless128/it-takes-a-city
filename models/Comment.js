// REQUIREMENTS //

// Require Model and DataTypes
const { Model, DataTypes } = require("sequelize");

// Require Sequelize
const sequelize = require("../config/connection");

// Create Comment Model
class Comment extends Model {}

// Create fields/columns here
Comment.init({
  // COLUMN #1 - ID // 
  id: {
    // Sets Data Type to integer
    type: DataTypes.INTEGER,
    // Does NOT allow a null input
    allowNull: false,
    // Sets as primary key
    primaryKey: true,
    // Set up to auto increment
    autoIncrement: true,
  },
  // COLUMN 
});
// Export Model
