const express = require('express');
const app = express();
app.use(express.json());
const config = require('./config/config');
const db = require('./config/db');
const connectDB = require('./config/db');

connectDB();


app.get('/', (req, res) => {
    res.send('hello world')
})
const port = config.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})