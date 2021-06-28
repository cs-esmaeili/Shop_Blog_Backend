const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const FactorProduct = sequelize.define(
    "factor_product",
    {
        factor_product_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        number: {
            type: DataTypes.MEDIUMINT,
        },
        price: {
            type: DataTypes.DECIMAL(12, 0),
        },
        sale_price: {
            type: DataTypes.DECIMAL(12, 0),
        },
        factor_id: {
            type: DataTypes.BIGINT(20),
        },
        product_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = FactorProduct;
