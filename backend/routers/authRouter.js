const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();
const {createUser, loginUser} = require('../validators/userValidator');

router.post('/signup',createUser, authController.signup);
router.post('/login',loginUser, authController.login);

module.exports = router;