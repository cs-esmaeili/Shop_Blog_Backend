const { checkToken } = require("../utils/token");
const { getToken } = require("../utils/bearer");
const { checkPermission } = require("../utils/permissions");

module.exports = (app) => {
    app.use(async (req, res, next) => {
        const token = await checkToken(getToken(req.headers.authorization));
        if (token != false) {
            const check = await checkPermission(
                token.person_id,
                req.originalUrl
            );
            if (check) {
                next();
            } else {
                res.status(403).send("Access Denied");
            }
        } else {
            res.status(403).send("Access Denied");
        }
    });
};
