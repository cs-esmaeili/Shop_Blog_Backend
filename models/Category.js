const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');


const Category = sequelize.define(
    "category",
    {
        category_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            unique: true,
        },
        link_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.BIGINT(20), 
            allowNull: true,
            defaultValue: 0,
        },
    },
    {
        freezeTableName: true,
    }
);



module.exports = Category;
