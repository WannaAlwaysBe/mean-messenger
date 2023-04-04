require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const errorMiddleware = require('./app/middlewares/error.middleware')

const authRouter = require('./app/routers/auth.router')

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRouter);

app.use(errorMiddleware);

(async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(process.env.DB_URL);

		app.listen(PORT, () => {
			console.log(`[server] Server started on PORT ${PORT}`);
		});
	} catch (e) {
		console.error(e);
	}
})();

module.exports = app;