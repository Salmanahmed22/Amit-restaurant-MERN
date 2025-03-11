const notificationServices = require('../services/notificationServices');
const jsend = require('jsend');


const createNotification = (req, res, next) => {
    const notification = req.body;
    notificationServices.createNotification(notification);
    res.json(jsend.success({ message: 'Notification created successfully' }));
}

module.exports = {
    createNotification
}