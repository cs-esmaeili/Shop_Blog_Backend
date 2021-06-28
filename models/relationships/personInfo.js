const Person = require("../Person");
const PersonInfo = require("../PersonInfo");
const Link = require("../Link");

PersonInfo.belongsTo(Person, {
    foreignKey: {
        name: "person_id",
    },
});
PersonInfo.belongsTo(Link, {
    foreignKey: {
        name: "link_id",
    },
});