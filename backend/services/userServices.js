const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const userRepo = require('../repos/userRepo');
// const UnauthorizedError = require('../Errors/UnauthorizedError');
const bookingService = require('./bookingServices');
const mealService = require('./mealServices');


const signUp = async (user) => {
    try {
        const foundUser = await userRepo.findUserByEmail(user.email);
        if (foundUser) {
            throw new Error('User already exists');
        }
        const newUser = await userRepo.createUser(user);
        const token = jwt.sign({id:newUser._id}, config.jwt.secret, {expiresIn: '1h'});
        return {newUser, token};
    } catch (error) {
        throw new Error(error.message);
    }
}


const login = async (email, password) => {
    try {
        const foundUser = await userRepo.findUserByEmail(email);
        console.log(foundUser,email);
        if (!foundUser) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, foundUser.password);
        
        if (!isMatch) {
            throw new Error('Wrong password');
        }
        
        const token = jwt.sign({ _id: foundUser._id }, config.jwt.secret, { expiresIn: config.jwt.expiration });
        return token;
    } catch (error) {
        throw new Error(error.message);
    }
}

const bookTable = async (booking) => {
    try {
        const newBooking = await bookingService.createBooking(booking);
        return newBooking;
    } catch (error) {
        throw new Error(error.message);
    }
}

const viewMenu = async () => {
    try {
        const meals = await mealService.getAllMeals();
        return meals;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUser = async (id) => {
    try {
        const user = await userRepo.findUserById(id);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUsers = async () => {
    try {
        const users = await userRepo.findAllUsers();
        return users;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    signUp,
    login,
    bookTable,
    viewMenu,
    getUser,
    getUsers
}