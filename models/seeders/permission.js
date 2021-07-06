const Permission = require("../Permission");
var _ = require("lodash");
const path = require("../../utils/path");
const fs = require("fs");

(async () => {
    const routes = JSON.parse(fs.readFileSync(`${path}/static/routes.json`));
    await routes.map(async (item) => {
        await Permission.destroy({ truncate: { cascade: true } });
        await Permission.create({
            path: item.path,
            description: item.description,
        });
    });
    return true;
})();
