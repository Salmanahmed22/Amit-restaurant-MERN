const notificationRepo = require('../repos/notificationRepo');

const createNotification = async (notification) => {
    try {
        const newNotification = await notificationRepo.createNotification(notification);
        return newNotification;
    } catch (err) {
        console.log("error in creating notification ", err);
        throw new Error(err.message);
    }
}

module.exports = { createNotification };