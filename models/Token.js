const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const { checkToken } = require("../utils/token");

const Token = sequelize.define(
    "token",
    {
        token_id: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
    }
);
Token.updateToken = async (token_id, token) => {
    const tempToken = token !== null ? await checkToken(token).iat : null;
    const result = await Token.update(
        { token: tempToken },
        {
            where: { token_id },
        }
    );
    if (result === null) {
        return false;
    }
    return result;
};

module.exports = Token;
