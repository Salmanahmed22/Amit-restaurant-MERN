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

const getAllUserNotifications = async(userId) => {
    try{
        return await Notification.find({userId});
    }catch(err){
        throw new Error(err.message)
    }
}

const getNotificationById = async(notificationId) => {
    try{
        return await Notification.findById(notificationId);
    }catch(err){
        throw new Error(err.message)
    }
}

const updateNotification = async(notificationId, seen) => {
    try{
        return await Notification.findByIdAndUpdate(notificationId, {seen}, {new: true});
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    createNotification,
    getAllUserNotifications,
    getNotificationById,
    updateNotification
}