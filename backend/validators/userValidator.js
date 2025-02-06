const {body} = require('express-validator');

const createUser = [
    body('firstName', 'first name is required').isString(),
    body('lastName', 'last name is required').isString(),
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8,max: 32}),
    body('isAdmin', 'isAdmin is required').isBoolean(), 
]

const loginUser = [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8, max: 32})
]

module.exports = {createUser, loginUser}