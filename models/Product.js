const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Product = sequelize.define(
    "product",
    {
        product_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
        },
        price: {
            type: DataTypes.DECIMAL(12, 0),
        },
        sale_price: {
            type: DataTypes.DECIMAL(12, 0),
        },
        status: {
            type: DataTypes.TINYINT,
        },
        stock: {
            type: DataTypes.MEDIUMINT,
        },
        order_number: {
            type: DataTypes.MEDIUMINT,
        },
        description: {
            type: DataTypes.TEXT,
        },
        category_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Product;
