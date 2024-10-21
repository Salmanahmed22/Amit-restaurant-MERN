const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const customerRepo = require('../repos/customerRepo');
const UnauthorizedError = require('../Errors/UnauthorizedError');


const signUp = async (user) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const newUser = await customerRepo.createUser(user);
        return newUser;
    } catch (error) {
        throw new Error(error.message);
    }
}

const login = async (user) => {
    try {
        const foundUser = await customerRepo.findUserByEmail(user.email);
        if (!foundUser) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(user.password, foundUser.password);
        if (!isMatch) {
            throw new Error('Wrong password');
        }
        const token = jwt.sign({ _id: foundUser._id }, config.jwt.secret, { expiresIn: config.jwt.expiration });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    signUp,
    login
}