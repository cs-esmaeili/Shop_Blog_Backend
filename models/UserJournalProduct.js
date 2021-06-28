const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const UserJournalProduct = sequelize.define(
    "user_journal_product",
    {
        user_journal_product_id: {
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
        user_journal_id: {
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

module.exports = UserJournalProduct;
