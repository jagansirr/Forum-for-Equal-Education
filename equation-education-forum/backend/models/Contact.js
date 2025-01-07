const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Contact = sequelize.define("Contact", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true },
    message: { type: DataTypes.TEXT, allowNull: false }
});

module.exports = Contact;
