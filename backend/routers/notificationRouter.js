const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.get('/', notificationController.getAllUserNotifications);
router.put('/', notificationController.markNotificationAsSeen);
router.put('/mark-all-read', notificationController.markAllUserNotificationAsSeen);


module.exports = router