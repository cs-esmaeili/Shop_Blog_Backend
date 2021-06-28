const UserCart = require("../UserCart");
const Product = require("../Product");
const Person = require("../Person");

UserCart.belongsTo(Person, {
    foreignKey: {
        name: "person_id",
    },
});
UserCart.belongsTo(Product, {
    foreignKey: {
        name: "product_id",
    },
});