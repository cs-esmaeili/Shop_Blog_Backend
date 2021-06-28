const { Sequelize } = require("sequelize");
console.log();
const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        logging: process.env.DB_LOG == 'true' ? true : false,
        host: "localhost",
        dialect: "mysql",
    }
);
module.exports = sequelize;
