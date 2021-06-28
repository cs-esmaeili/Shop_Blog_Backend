const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const UserJournal = sequelize.define(
    "user_journal",
    {
        user_journal_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ref_id: {
            type: DataTypes.STRING(255),
        },
        authority_code: {
            type: DataTypes.STRING(255),
        },
        done: {
            type: DataTypes.BOOLEAN,
        },
        postal_code: {
            type: DataTypes.STRING(10),
        },
        price: {
            type: DataTypes.DECIMAL(12, 0),
        },
        name: {
            type: DataTypes.STRING(255),
        },
        phone_number: {
            type: DataTypes.STRING(11),
        },
        state: {
            type: DataTypes.STRING(50),
        },
        city: {
            type: DataTypes.STRING(50),
        },
        address: {
            type: DataTypes.TEXT,
        },
        description: {
            type: DataTypes.TEXT,
        },
        person_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = UserJournal;
