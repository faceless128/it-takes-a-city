// REQUIREMENTS START //

// Require Model and DataType
const { Model, DataTypes } = require("sequelize");

// Require Sequelize
const sequelize = require("../config/connection");

// REQUIREMENTS END // 

// Create Model
class Post extends Model {}

// Create fields/columns here
Post.init({
  // Columns will go here!
});
// Export Model
module.exports = Post;
