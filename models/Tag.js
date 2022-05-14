const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

// this is the Location Model
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "location",
  }
);

module.exports = Tag;
