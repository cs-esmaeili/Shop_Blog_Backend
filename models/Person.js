const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const PersonInfo = require("./PersonInfo");
const Link = require("./Link");

const Person = sequelize.define(
    "person",
    {
        person_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(255),
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
        },
        status: {
            type: DataTypes.TINYINT,
        },
        role_id: {
            type: DataTypes.BIGINT(20),
        },
        token_id: {
            type: DataTypes.BIGINT(20),
        },
    },
    {
        freezeTableName: true,
    }
);
Person.getPerson = async (username, password) => {
    let person = await Person.findOne({
        where: { username, password },
        include: {
            model: PersonInfo,
            include: {
                model: Link,
            },
        },
        attributes: {
            include: [],
            exclude: [],
        },
    });
    return person;
};
Person.getToken = async (person_id) => {
    let person = await Person.findOne({
        where: { person_id },
        include: {
            model: PersonInfo,
            include: {
                model: Link,
            },
        },
        attributes: {
            include: [],
            exclude: [],
        },
    });
    return person;
};
module.exports = Person;
