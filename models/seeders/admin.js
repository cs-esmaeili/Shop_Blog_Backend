const Person = require("../Person");
const result = await Person.create({
    username: "Jane",
    password: "Doe",
    status: "",
    role_id: 1,
});
