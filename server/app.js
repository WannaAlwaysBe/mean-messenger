require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const errorMiddleware = require('./app/middlewares/error.middleware');
const socketAuthMiddleware = require('./app/middlewares/socket-auth.middleware');
const { createServer } = require("http");
const { Server } = require("socket.io");

const authRouter = require('./app/routers/auth.router');
const userRouter = require('./app/routers/user.router');
const chatRouter = require('./app/routers/chat.router');
const messageService = require('./app/services/message.service');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api', userRouter, chatRouter);

app.use(errorMiddleware);

const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: ["http://localhost:3000", "http://localhost:4200"],
		credentials: "true",
	},
});

io.use(socketAuthMiddleware);

global.onlineUsers = new Map();
io.on('connection', (socket) => {
	onlineUsers.set(socket.user.id, socket.id);

	socket.on('all_messages', async (data) => {
		const messages = await messageService.getMessages(data);
		io.to(socket.id).emit('message', JSON.stringify(messages));
	});

	socket.on('message', async (data) => {
		const parsedData = JSON.parse(data);

		const message = await messageService.createMessage(parsedData);
		io.to(socket.id).emit('message', JSON.stringify(message));
		io.to(onlineUsers.get(parsedData.receiver)).emit('message', JSON.stringify(message));
	});

	socket.on('disconnect', () => {
		onlineUsers.delete(socket.user.id);
	});
});

(async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.DB_URL);

		httpServer.listen(PORT, () => {
			console.log(`[server] Server started on PORT ${PORT}`);
		});
	} catch (e) {
		console.error(e);
	}
})();

module.exports = httpServer;
