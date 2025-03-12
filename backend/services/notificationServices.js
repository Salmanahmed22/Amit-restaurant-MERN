const notificationRepo = require('../repos/notificationRepo');
const userRepo = require('../repos/userRepo');
const createNotification = async (notification) => {
    try {
        const newNotification = await notificationRepo.createNotification(notification);
        const user = await userRepo.findUserById(notification.userId);
        user.notifications.push(newNotification._id);
        await userRepo.updateUser(user._id, user);
        return newNotification;
    } catch (err) {
        console.log("error in creating notification ", err);
        throw new Error(err.message);
    }
}

const getAllUserNotifications = async (userId) => {
    try {
        return await notificationRepo.getAllUserNotifications(userId);
    } catch (err) {
        throw new Error(err.message);
    }
}

const markNotificationAsSeen = async (notificationId,seen)=>{
    try{
        const updatedNotification = await notificationRepo.updateNotification(notificationId,seen);
        return updatedNotification;
    }catch (err) {
        throw new Error(err.message);
    }
}


module.exports = { 
    createNotification,
    getAllUserNotifications,
    markNotificationAsSeen
 };