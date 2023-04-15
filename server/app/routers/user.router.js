const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require('express');


const router = express.Router();

router.get('/users', authMiddleware, userController.users);
router.get('/user', authMiddleware, userController.user);
router.get('/user/:id', authMiddleware, userController.userById);

module.exports = router;