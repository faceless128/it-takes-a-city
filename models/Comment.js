// REQUIREMENTS //

// Require Model and DataTypes
const { Model, DataTypes } = require("sequelize");

// Require Sequelize
const sequelize = require("../config/connection");

// Create Comment Model
class Comment extends Model {}

// Create fields/columns here
Comment.init(
  {
    // COLUMN #1 - ID //
    id: {
      // Sets Data Type to Integer
      type: DataTypes.INTEGER,
      // Does NOT allow a null input
      allowNull: false,
      // Sets as primary key
      primaryKey: true,
      // Set up to auto increment
      autoIncrement: true,
    },
    // COLUMN #2 - Comment Text //
    comment_text: {
      // Sets Data Type to String
      type: DataTypes.STRING,
      // Does NOT allow a null input
      allowNull: false,
      // Validation to ensure there's at least 1 character
      validate: {
        len: [1],
      },
    },
    // COLUMN #3 - USER ID //
    user_id: {
      // Sets Data Type to Integer
      type: DataTypes.INTEGER,
      // References User Model - ID
      references: {
        model: "user",
        key: "id",
      },
    },

    // COLUMN #5 - POST ID //
    post_id: {
      // Sets Data Type to Integer
      type: DataTypes.INTEGER,
      // References Post Model - ID
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    // Sets freeze table name to true
    freezeTableName: true,
    // Sets underscored to true
    underscored: true,
    // Sets model name to "comment"
    modelName: "comment",
  }
);
// Export Model
module.exports = Comment;
