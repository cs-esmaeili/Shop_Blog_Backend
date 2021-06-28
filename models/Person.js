const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Person = sequelize.define(
    "person",
    {
        person_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(255),
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
        },
        status: {
            type: DataTypes.TINYINT,
        },
        role_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Person;
