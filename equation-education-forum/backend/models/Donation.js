const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Donation = sequelize.define("Donation", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  recurring: { type: DataTypes.BOOLEAN, defaultValue: false },
  project: { type: DataTypes.STRING, allowNull: true },
  paymentMethod: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },


  verified: { type: DataTypes.BOOLEAN, defaultValue: false },

});

module.exports = Donation;
