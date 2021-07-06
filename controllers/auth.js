const { createToken, checkToken } = require("../utils/token");

exports.logIn = (req, res, next) => {
    console.log(req.body);
    res.send(createToken({ javad: "salam" } , '1h'));
};
exports.logOut = () => {};
