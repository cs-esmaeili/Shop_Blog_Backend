const Role = require("../Role");

(async () => {
    await Role.destroy({ truncate: { cascade: true } });
    await Role.create({
        name: "Admin",
    });
})();
