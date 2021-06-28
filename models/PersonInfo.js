const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const PersonInfo = sequelize.define(
    "person_info",
    {
        person_info_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
        },
        family: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.TEXT,
        },
        person_id: {
            type: DataTypes.BIGINT(20),
        },
        link_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = PersonInfo;
