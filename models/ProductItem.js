const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const ProductItem = sequelize.define(
    "product_item",
    {
        product_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            primaryKey: true,
        },
        item_id: {
            type: DataTypes.BIGINT(20).UNSIGNED,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = ProductItem;
