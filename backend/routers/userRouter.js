const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authentication');

// get user profile
router.get('/profile/',authenticateToken, userController.getUser);
// get all users (admin)
router.get('/', userController.getUsers);

router.put('/profile/', userController.getUsers);
router.get('/bookings/', userController.getUsers);

module.exports = router