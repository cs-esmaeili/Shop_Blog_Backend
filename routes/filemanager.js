const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.get("/test", (req, res, next) => {
    res.send("salam");
});

module.exports = router;
