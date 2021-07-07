const jwt = require("jsonwebtoken");
const path = require("./path");
const fs = require("fs");

exports.createToken = (payload, expTime) => {
    const privateKey = fs.readFileSync(`${path}/key/private.key`);
    const token = jwt.sign(payload, privateKey, {
        algorithm: "RS256",
        expiresIn: expTime,
    });
    return token;
    // fs.readFile(`${path}/key/private.key`, "utf8", (err, privateKey) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     jwt.sign(
    //         payload,
    //         privateKey,
    //         { algorithm: "RS256" },
    //         function (err, token) {
    //             console.log(err, token);
    //             return token;
    //         }
    //     );
    // });
};

exports.checkToken = (token) => {
    const publicKey = fs.readFileSync(`${path}/key/public.key`);
    try {
        const check = jwt.verify(token, publicKey, {
            algorithm: "RS256",
        });
        return check;
    } catch (error) {
        console.log(error);
        return false;
    }
}
