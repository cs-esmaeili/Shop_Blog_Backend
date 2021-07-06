const RolePermission = require("../RolePermission");

(async () => {
    await RolePermission.destroy({ truncate: { cascade: true } });
    await RolePermission.create({
        role_id: 1,
        permission_id: 1,
    });
})();
