"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation_all extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation_all.init(
    {
      starttime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Reservation_all",
    },
  );
  return Reservation_all;
};
