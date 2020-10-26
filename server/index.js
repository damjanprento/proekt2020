const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

//Import Routes
const authRoute = require('./routes/auth');
const PORT = process.env.PORT || 3001;

dotenv.config({path: '.env'});

//Connect to DataBase
mongoose.connect(
process.env.DB_CONNECT, { 
useNewUrlParser: true,
useUnifiedTopology: true }, () => console.log('Connected to DB!')
);

app.use(cors());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Middlewares
app.use('/api/user', authRoute);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'));
}

app.listen(PORT, () => console.log('Server up and running!'));
