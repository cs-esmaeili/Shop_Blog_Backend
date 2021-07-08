const { createToken, checkToken } = require("../utils/token");
const Person = require("../models/Person");
const Token = require("../models/Token");
const { getToken } = require("../utils/bearer");

exports.logIn = async (req, res) => {
    let person = await Person.getPerson(req.body.username, req.body.password);
    person = person.toJSON();
    if (person !== null) {
        const token = await createToken(person, "1h");
        const updateToken = await Token.updateToken(person.token_id, token);
        if (updateToken !== false) {
            res.send(token);
        } else {
            res.status(500).send("server error");
        }
    } else {
        res.status(403).send("inValid Username or Passowrd");
    }
};
exports.logOut = async (req, res) => {
    const checktoken = checkToken(getToken(req.headers.authorization));
    if (checktoken != false) {
        let personToken = await Person.getToken(checktoken.person_id);
        const updateToken = await Token.updateToken(personToken.token_id, null);
        if (updateToken !== false) {
            res.status(200).send("user loged out");
        } else {
            res.status(500).send("server error");
        }
    } else {
        res.status(404).send("user not found");
    }
};
