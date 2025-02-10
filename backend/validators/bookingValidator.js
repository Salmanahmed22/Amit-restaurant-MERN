const {body} = require('express-validator');

const createBooking = [
    body('username', 'name is required').isString(),
    body('email', 'email is required').isEmail(),
    body('phone', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    body('date', 'date is required').isString(),
    body('time', 'time is required').isString(),
    body('capacity', 'capacity is required').isString()
]

module.exports = {createBooking}