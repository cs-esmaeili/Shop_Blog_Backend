const Link = require("../Link");
const Post = require("../Post");
const Person = require("../Person");
const Category = require("../Category");

Post.belongsTo(Link, {
    foreignKey: {
        name: "link_id",
    },
});

Post.belongsTo(Person, {
    foreignKey: {
        name: "person_id",
    },
});
Post.belongsTo(Category, {
    foreignKey: {
        name: "category_id",
    },
});
