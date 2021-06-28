const UserJournalProduct = require("../UserJournalProduct");
const UserJournal = require("../UserJournal");
const Product = require("../Product");

UserJournalProduct.belongsTo(UserJournal, {
    foreignKey: {
        name: "user_journal_id",
    },
});
UserJournalProduct.belongsTo(Product, {
    foreignKey: {
        name: "product_id",
    },
});