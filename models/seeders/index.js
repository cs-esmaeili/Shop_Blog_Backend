(async () => {
    await require("./token");
    await require("./permission");
    await require("./role");
    await require("./role_permission");
    await require("./admin");
    console.log("seed done");
})();
