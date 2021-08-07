const Person = require("../models/Person");
exports.checkPermission = async (person_id, originalUrl) => {
    permissions = await Person.getPermissions(person_id);
    const result = await permissions.filter((permission) => permission.path === originalUrl);
    return (result.length > 0 ? true : false);
};
