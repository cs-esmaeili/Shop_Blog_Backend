const express = require("express");
const router = express.Router();
exports.text = () => {
    console.log(router.stack);
};
