const appRoot = require("app-root-path");
const { mimeType } = require("../utils/mimeType");
const { uuid } = require("uuidv4");
const fs = require("fs");

exports.saveFile = (req, res, next) => {
    var reqlib = require("app-root-path").require;
    console.log(reqlib, appRoot);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }
    const file = req.files[Object.keys(req.files)[0]];
    let path = `${appRoot.path}${process.env.FILE_MANAGER_BASE_Directory}`;

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
    path += `${uuid()}.${mimeType(file.name)}`;

    file.mv(path, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("File uploaded!");
    });
};
exports.deleteFile = () => {};
exports.createFolder = () => {};
exports.deleteFolder = () => {};
exports.moveFile = () => {};
exports.moveFolder = () => {};
