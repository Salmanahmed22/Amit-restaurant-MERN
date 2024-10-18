const dotenv = require('dotenv');
const { mongo } = require('mongoose');
dotenv.config();

const config = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    jwt: {
        secret: process.env.JWT_SECRET,
        exporation: process.env.JWT_EXPIRATION
    }
}

module.exports = config