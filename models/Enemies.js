const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Enemies extends Model {}

Enemies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    damage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "enemies",
  }
);

module.exports = Enemies;
