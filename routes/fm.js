const express = require("express");
const router = express.Router();
const fm = require("../controllers/fm");

router.post("/savefile", fm.saveFile);
router.post("/deletefile", fm.deleteFile);
router.post("/createfolder", fm.createFolder);
router.post("/deletefolder", fm.deleteFolder);
router.post("/movefile", fm.moveFile);
router.post("/movefolder", fm.moveFolder);

module.exports = router;
