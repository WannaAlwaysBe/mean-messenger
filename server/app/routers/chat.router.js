const chatController = require('../controllers/chat.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const chatAccessMiddleware = require('../middlewares/chat.access.middleware');
const express = require('express');

const router = express.Router();

router.get('/chats', authMiddleware, chatController.getChats);
router.post('/chats', authMiddleware, chatController.createChat);

module.exports = router;