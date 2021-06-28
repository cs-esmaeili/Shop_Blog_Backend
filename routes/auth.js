const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");


router.get("/login", authController.logIn);
router.post("/logout", authController.logOut);

module.exports = router;
