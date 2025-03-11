const Notification = require("../models/Notification")


const createNotification = async(notification) => {
    try{
        const newNotification = new Notification(notification)
        return newNotification.save()
    }catch(err){
        console.log("error in creating notification ", err);
        throw new Error(err.message)
    }
}

module.exports = {createNotification}