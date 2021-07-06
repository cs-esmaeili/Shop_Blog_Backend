require("../models/index");

exports.runServer = (app, sequelize) => {
    if (process.argv.length > 2) {
        if (process.argv.includes("migrate") && process.argv.includes("seed")) {
            sequelize.sync({ force: true }).then((result) => {
                console.log("migration done");
                require("../models/seeders/index");
            });
        } else {
            if (process.argv.includes("migrate")) {
                sequelize.sync({ force: true }).then((result) => {
                    console.log("migration done");
                });
            }
            if (process.argv.includes("seed")) {
                require("../models/seeders/index");
            }
        }
    } else {
        sequelize
            .sync()
            .then((result) => {
                if (process.env.DB_LOG == "true") {
                    console.log(result);
                }
                app.listen(process.env.PORT, () => {
                    console.log(
                        `Example app listening at http://localhost:${process.env.PORT}`
                    );
                });
            })
            .catch((err) => console.log(err));
    }
};
