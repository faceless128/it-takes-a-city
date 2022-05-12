const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection);

class Foodbank extends Model {}

// this is the Foodbank Model
Foodbank.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  foodbank_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foodbank_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "city",
      key: "id"
    }
  }
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "foodbank"
})

module.exports = Foodbank;
