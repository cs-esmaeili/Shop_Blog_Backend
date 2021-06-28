const Person = require("../Person");
const Factor = require("../Factor");
const UserCart = require("../UserCart");
const PersonInfo = require("../PersonInfo");
const Post = require("../Post");
const UserJournal = require("../UserJournal");
const Role = require("../Role");

Person.hasMany(Factor, {
    foreignKey: {
        name: "person_id",
    },
});
Person.hasOne(PersonInfo, {
    foreignKey: {
        name: "person_id",
    },
});
Person.hasMany(UserCart, {
    foreignKey: {
        name: "person_id",
    },
});

Person.hasMany(UserJournal, {
    foreignKey: {
        name: "person_id",
    },
});

Person.hasMany(Post, {
    foreignKey: {
        name: "person_id",
    },
});
Person.belongsTo(Role, {
    foreignKey: {
        name: "role_id",
    },
});