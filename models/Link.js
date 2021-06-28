const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');


const Link = sequelize.define(
    "link",
    {
        link_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezeTableName: true,
    }
);


module.exports = Link;
