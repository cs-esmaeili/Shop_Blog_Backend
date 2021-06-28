const FactorProduct = require("../FactorProduct");
const Factor = require("../Factor");
const Product = require("../Product");

FactorProduct.belongsTo(Factor, {
    foreignKey: {
        name: "factor_id",
    },
});
FactorProduct.belongsTo(Product, {
    foreignKey: {
        name: "product_id",
    },
});