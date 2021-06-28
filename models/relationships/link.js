const Category = require("../Category");
const Link = require("../Link");
const PersonInfo = require("../PersonInfo");
const Post = require("../Post");

Link.hasMany(Category, {
    foreignKey: {
        name: "link_id",
    },
});
Link.hasMany(Post, {
    foreignKey: {
        name: "link_id",
    },
});
Link.hasMany(PersonInfo, {
    foreignKey: {
        name: "link_id",
    },
});
