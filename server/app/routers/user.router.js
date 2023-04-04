const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require('express');


const router = express.Router();

router.get('/users', authMiddleware, userController.users);

module.exports = router;