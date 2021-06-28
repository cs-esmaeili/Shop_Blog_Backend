const Product = require("../Product");
const UserCart = require("../UserCart");
const Category = require("../Category");
const UserJournalProduct = require("../UserJournalProduct");
const FactorProduct = require("../FactorProduct");

Product.hasMany(UserCart, {
    foreignKey: {
        name: "product_id",
    },
});
Product.belongsTo(Category, {
    foreignKey: "category_id",
});
Product.hasMany(UserJournalProduct, {
    foreignKey: {
        name: "product_id",
    },
});

Product.hasMany(FactorProduct, {
    foreignKey: "product_id",
});