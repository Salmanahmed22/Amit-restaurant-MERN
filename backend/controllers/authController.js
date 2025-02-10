const jsend = require('jsend');
const {validationResult} = require('express-validator');
const authServices = require('../services/authServices');


const signup = async (req, res,next) => {
    try{
        const error = validationResult(req)
        console.log("heeyyy");
        console.log(error);
        
        
        if(!error.isEmpty())
            return res.status(400).json(error.array())
        
        const userDto = req.body
        
        const {user,token} = await authServices.signUp(userDto)
        res.cookie("token", token, { httpOnly: true }); 
        res.json(jsend.success({user,token}))
        return {user,token}
    }catch(error){
        next(error) 
    }
}

const login = async (req, res,next) => {   
    try{
        const error = validationResult(req)
        if(!error.isEmpty())
             return res.status(400).json(error.array())
        const {email, password} = req.body
        const token = await authServices.login(email, password)
        res.cookie("token", token, { httpOnly: true }); 
        return res.json(jsend.success({token}))
    }catch(error){
        next(error) 
    }
}

const logout = (req, res) => {
    res.clearCookie("token");
    res.json(jsend.success({message:"Logout Successfully"}))
}

module.exports = {
    signup,
    login,
    logout
}