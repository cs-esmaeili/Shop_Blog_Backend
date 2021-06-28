const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const Permission = sequelize.define(
    "permission",
    {
        permission_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
        },
        description: {
            type: DataTypes.STRING(500),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Permission;
