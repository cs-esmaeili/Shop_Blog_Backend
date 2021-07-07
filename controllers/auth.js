const { createToken } = require("../utils/token");
const Person = require("../models/Person");
const PersonInfo = require("../models/PersonInfo");
const Role = require("../models/Role");
const Permission = require("../models/Permission");

exports.logIn = async (req, res) => {
    let person = await Person.findOne({
        where: { username: req.body.username, password: req.body.password },
        include: PersonInfo,
    });
    if (person !== null) {
        const permission = await Role.findAll({
            where: { role_id: person.role_id },
            include: Permission,
            attributes: { exclude: "permission.role_permission" },
        });
        person = person.toJSON();
        delete person.password;
        let permissions = await permission[0].toJSON().permissions;
        await permissions.map((item) => {
            delete item.role_permission;
            return item;
        });
        person.permissions = permissions;
        res.send(createToken(person, "1h"));
    } else {
        res.send("inValid Username or Passowrd");
    }
};
exports.logOut = () => {};
