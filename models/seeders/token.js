const Token = require("../Token");
const { createToken, checkToken } = require("../../utils/token");

(async () => {
    await Token.destroy({ truncate: { cascade: false } });
    const tempToken = await checkToken(
        await createToken({ person_id: 1 }, "1h")
    );
    await Token.create({
        token: tempToken.iat,
    });
})();
