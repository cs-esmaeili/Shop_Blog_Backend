const Role = require("../Role");
const Permission = require("../Permission");
const RolePermission = require("../RolePermission");

Permission.belongsToMany(Role, {
    through: RolePermission,
    sourceKey: "permission_id",
    targetKey: "role_id",
    foreignKey: "permission_id",
});
