const Category = require("../Category");
const Link = require("../Link");
const Product = require("../Product");
const Post = require("../Post");

Category.belongsTo(Link, {
    foreignKey: {
        name: "link_id",
    },
});

Category.hasMany(Product, {
    foreignKey: "category_id",
});
Category.hasMany(Post, {
    foreignKey: "category_id",
});
