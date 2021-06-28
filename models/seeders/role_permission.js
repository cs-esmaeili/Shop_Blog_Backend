const RolePermission = require("../RolePermission");
const result = await RolePermission.create({
    role_id: 1,
    permission_id: 1,
});
