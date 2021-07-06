const Person = require("../Person");
const PersonInfo = require("../PersonInfo");
const Link = require("../Link");

(async () => {
    await Person.destroy({ truncate: { cascade: false } });
    await Link.destroy({ truncate: { cascade: false } });
    await PersonInfo.destroy({ truncate: { cascade: false } });

    await Person.create({
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
        status: 1,
        role_id: 1,
    });
    await Link.create({
        url: process.env.BASE_URL + "public/50167980.jpg",
    });
    await PersonInfo.create({
        name: process.env.ADMIN_NAME,
        family: process.env.ADMIN_FAMILY,
        description: "Main admin",
        person_id: 1,
        link_id: 1,
    });
})();