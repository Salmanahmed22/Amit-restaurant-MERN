const User = require('../models/User');

const creareUser = async (user) => {
    try{
        const newUser = new User(user);
        return await newUser.save();
    }catch(err){
        throw new Error(err.message);
    }
}

const findUserByEmail = async (email) => {
    try{
        return await User.findOne({email});
    }catch(err){
        throw new Error(err.message);
    }
}

module.exports = {creareUser, findUserByEmail};


