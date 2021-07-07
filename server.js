const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const { runServer } = require("./utils/runServer");
const sequelize = require("./database");
require("./models/index");
const auth = require("./routes/auth");
const filemanager = require("./routes/filemanager");
const { middlewares } = require("./Middlewares/index");

app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("");
});
app.use("/auth", auth);

middlewares(app);

app.use("/filemanager", filemanager);

runServer(app, sequelize);
