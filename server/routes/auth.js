const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation } = require('../validation');
const { valid } = require('@hapi/joi');

router.post('/register', async (req, res) => {
    console.log('neso');
    //Validating data before making a user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(res.send(error.details[0].message));

    //Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exists');

    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //Create a new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        mobile: req.body.mobile,
        country: req.body.country,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    //Validating data before logging a user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(res.send(error.details[0].message));

    //Checking if the email exists
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email does not exist');
   
    //Is the password correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    
});

module.exports = router;