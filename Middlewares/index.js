exports.middlewares = (app) => {
    require("./checkToken")(app);
};
