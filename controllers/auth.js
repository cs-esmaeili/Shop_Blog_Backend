const { text } = require("../models/seeders/permission");
exports.logIn = (req, res, next) => {
    text();
    res.send("salam");
};
exports.logOut = () => {};
