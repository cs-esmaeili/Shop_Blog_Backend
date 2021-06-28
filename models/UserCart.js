const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const UserCart = sequelize.define(
    "user_cart",
    {
        user_cart_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        person_id: {
            type: DataTypes.BIGINT(20), 
        },
        product_id: {
            type: DataTypes.BIGINT(20), 
        },
        number: {
            type: DataTypes.MEDIUMINT,
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = UserCart;
