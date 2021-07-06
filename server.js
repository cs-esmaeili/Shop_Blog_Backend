const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const { runServer } = require("./utils/runServer");
const sequelize = require("./database");
require("./models/index");
const auth = require("./routes/auth");

app.use(express.json());

app.use(express.static("public"));
app.use("/auth", auth);

app.get("/", (req, res) => {
    res.send("");
});

runServer(app, sequelize);
