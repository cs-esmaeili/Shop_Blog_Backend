const { checkToken } = require("../utils/token");
const { getToken } = require("../utils/bearer");

module.exports = (app) => {
    app.use((req, res, next) => {
        let token = checkToken(getToken(req.headers.authorization));
        if (token != false) {
            let permissions = token.permissions;
            if (
                permissions.filter(function (e) {
                    return e.path === req.originalUrl;
                }).length > 0
            ) {
                next();
            } else {
                res.status(403).send("Access Denied");
            }
        } else {
            res.status(403).send("Access Denied");
        }
    });
};
