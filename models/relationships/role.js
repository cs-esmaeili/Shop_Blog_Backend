const Role = require("../Role");
const Permission = require("../Permission");
const Person = require("../Person");
const RolePermission = require("../RolePermission");

Role.belongsToMany(Permission, {
    through: RolePermission,
    sourceKey: "role_id",
    targetKey: "permission_id",
    foreignKey: {
        name: "role_id",
    },
});

Role.hasMany(Person, {
    foreignKey: {
        name: "role_id",
    },
});