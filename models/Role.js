const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const Role = sequelize.define(
    "role",
    {
        role_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            unique: true,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Role;
