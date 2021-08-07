const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const { runServer } = require("./utils/runServer");
const sequelize = require("./database");
require("./models/index");
const auth = require("./routes/auth");
const fm = require("./routes/fm");
const { middlewares } = require("./Middlewares/index");
const fileUpload = require("express-fileupload");

// BodyPaser
app.use(express.json());
app.use(fileUpload());
// End BodyPaser


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("");
});
app.use("/auth", auth);

middlewares(app);

app.use("/fm", fm);

runServer(app, sequelize);
