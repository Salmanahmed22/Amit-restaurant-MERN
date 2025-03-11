const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const connectDB = require('./config/db');

const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const mealRouter = require('./routers/mealRouter');
const bookingRouter = require('./routers/bookingRouter');
const notificationRouter = require('./routers/notificationRouter');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/menu', mealRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/notifications', notificationRouter);

// Start Server
const port = config.port || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
