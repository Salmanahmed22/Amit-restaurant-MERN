const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../middlewares/authentication');
const {updateUser} = require('../validators/userValidator');
const {validationResult} = require('express-validator');
const {authorizeAdmin} = require('../middlewares/authorization');
// get user profile
router.get('/profile/',authenticateToken, userController.getUser);
// get all users (admin)
router.get('/',authorizeAdmin, userController.getUsers);

router.put('/profile/', updateUser, authenticateToken, userController.updateUser); 
router.get('/bookings/',authenticateToken, userController.getBookings);

module.exports = router