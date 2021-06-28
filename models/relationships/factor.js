const Factor = require("../Factor");
const Person = require("../Person");
const FactorProduct = require("../FactorProduct");

Factor.belongsTo(Person, {
    foreignKey: {
        name: "person_id",
    },
});
Factor.hasMany(FactorProduct, {
    foreignKey: {
        name: "factor_id",
    },
});
