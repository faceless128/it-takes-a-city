// Matt to work on this! Don't TOUCH FOR COMMITS!!!!
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class LocationTag extends Model {}

LocationTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "location",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location_tag",
  }
);

module.exports = LocationTag;
