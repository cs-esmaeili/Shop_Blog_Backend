const UserJournal = require("../UserJournal");
const Person = require("../Person");
const UserJournalProduct = require("../UserJournalProduct");


UserJournal.belongsTo(Person, {
    foreignKey: {
        name: "person_id",
    },
});
UserJournal.hasMany(UserJournalProduct, {
    foreignKey: {
        name: "user_journal_id",
    },
});