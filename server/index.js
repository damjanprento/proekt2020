const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');

dotenv.config({path: '.env'});

//Connect to DataBase
mongoose.connect(
process.env.DB_CONNECT, { 
useNewUrlParser: true,
useUnifiedTopology: true }, () => console.log('Connected to DB!')
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3001, () => console.log('Server up and running!'));
