const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authentication');

// get user profile
router.get('/profile/',authenticateToken, userController.getUser);
router.put('/profile/', userController.getUsers);
router.get('/bookings/', userController.getUsers);

module.exports = router