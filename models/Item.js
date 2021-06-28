const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const Person = sequelize.define(
    "person",
    {
        item_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        key: {
            type: DataTypes.STRING(255),
        },
        value: {
            type: DataTypes.JSON,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Person;
