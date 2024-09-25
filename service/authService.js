const jwtService = require('./jwtService');
const userService = require('./userService');

async function login(email, password) {
    const user = await userService.checkLogIn({ email, password });
    let token;
    if (user.message != 0 && user.message != -1 && user.existingUser) {
        token = jwtService.generateToken({ userId: user.existingUser.ID });
        return token;
    }
    throw new Error("Invalid data")
}

module.exports = { login };