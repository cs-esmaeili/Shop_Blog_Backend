const RolePermission = require("../RolePermission");
const path = require("../../utils/path");
const fs = require("fs");

(async () => {
    await RolePermission.destroy({ truncate: { cascade: true } });
    const routes = await JSON.parse(
        fs.readFileSync(`${path}/static/routes.json`)
    );
    await routes.map(async (item, index) => {
        await RolePermission.create({
            role_id: 1,
            permission_id: index + 1,
        });
    });
})();
