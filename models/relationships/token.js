const Person = require("../Person");
const Token = require("../Token");

Token.hasOne(Person, {
    foreignKey: {
        name: "token_id",
    },
});