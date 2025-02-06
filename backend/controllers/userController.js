const userServices = require('../services/userServices');
const jsend = require('jsend');


const getUser = async (req, res) => {
    try{
        const user = await userServices.getUser(req.user._id);
        res.json(jsend.success({user}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await userServices.getUsers();
        res.json(jsend.success({users}));
    }catch(err){
        res.status(500).json(jsend.error({message: err.message}));
    }
}


module.exports = {
    getUser,
    getUsers
}
