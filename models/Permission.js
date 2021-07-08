const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const Role = require("./Role");

const Permission = sequelize.define(
    "permission",
    {
        permission_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        path: {
            type: DataTypes.STRING(100),
        },
        description: {
            type: DataTypes.STRING(500),
        },
    },
    {
        freezeTableName: true,
    }
);
Permission.getPermission = async (role_id) => {
    const permission = await Role.findAll({
        where: { role_id },
        include: Permission,
        attributes: { exclude: "permission.role_permission" },
    });
    let permissions = await permission[0].toJSON().permissions;
    await permissions.map((item) => {
        delete item.role_permission;
        return item;
    });
    return permissions;
};

module.exports = Permission;
