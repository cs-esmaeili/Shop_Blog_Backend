const {  DataTypes } = require("sequelize");
const sequelize = require('../database/index');

const Post = sequelize.define(
    "post",
    {
        post_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
        },
        title: {
            type: DataTypes.STRING(255),
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        body: {
            type: DataTypes.TEXT,
        },
        meta_keywords: {
            type: DataTypes.TEXT,
        },
        link_id: {
            type: DataTypes.BIGINT(20),
        },
        category_id: {
            type: DataTypes.BIGINT(20),
        },
        person_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);

module.exports = Post;
