const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const RolePermission = sequelize.define(
    "role_permission",
    {
        role_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            primaryKey: true,
        },
        permission_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = RolePermission;
