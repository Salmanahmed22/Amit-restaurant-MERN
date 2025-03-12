const notificationServices = require('../services/notificationServices');
const jsend = require('jsend');


const getAllUserNotifications = async (req, res, next) => {
    try{
        const userId = req.query.userId;
        console.log("alooo",userId);
        
        const notifications = await notificationServices.getAllUserNotifications(userId);
        res.json(jsend.success({ "notifications": notifications }));
    }catch(err){
        throw new Error(err.message)
    }
    
}

const markNotificationAsSeen = async (req, res, next) => {
    
    const notificationId = req.body.notificationId;
    const seen = req.body.seen
    console.log("updaate notificationnn");
    console.log(notificationId, seen);
    

    const updatedNotification = await notificationServices.markNotificationAsSeen(notificationId,seen);
    console.log(updatedNotification);
    
    res.json(jsend.success({ "notification": updatedNotification }));

}

module.exports = {
    getAllUserNotifications,
    markNotificationAsSeen
}