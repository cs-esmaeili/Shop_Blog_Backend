const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({ path: "./config/config.env" });
const sequelize = require("./database");
const { createToken , checkToken } = require("./utils/token");
require("./models/index");
const auth = require('./routes/auth');


app.use('/auth',auth);

app.get("/", (req, res) => {
    res.send("" + createToken({ javad: "salam" } , ));
});

sequelize
    .sync()
    .then((result) => {
        if (process.env.DB_LOG == 'true') {
            console.log(result);
        }
        app.listen(process.env.PORT, () => {
            console.log(
                `Example app listening at http://localhost:${process.env.PORT}`
            );
        });
    })
    .catch((err) => console.log(err));
