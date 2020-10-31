const router = require('express').Router();
const User = require('../model/User');
const Product = require('../model/Product');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation, newProductValidation } = require('../validation');
const { valid } = require('@hapi/joi');
const { db } = require('../model/User');
const { response } = require('express');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:3001/api/user";

router.post('/register', async (req, res) => {
    
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

    req.session.user = user;
});

router.post('/newproduct', async (req, res) => {
    const {error} = newProductValidation(req.body);
    if(error) return res.status(400).send(res.send(error.details[0].message));

    //Create a new product
    const product = new Product({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        productType: req.body.productType,
        purchaseDate: req.body.purchaseDate,
        productPrice: req.body.productPrice
    });
    try {
        const savedProduct = await product.save();
        res.send({product: product._id});
    } catch(err) {
        res.status(400).send(err);
    }
});

// router.route('/products').get(function (req, res){
//     Product.find().toArray(function(err, result){
//         if(err) console.log(err);
//         console.log(result);
//     });
// });

router.get('/products', (req, res) => {
    MongoClient.connect(process.env.DB_CONNECT, { 
        useNewUrlParser: true,
        useUnifiedTopology: true },
        function(err, db){
        if(err) return err;
        var dbo = db.db("semos");
        dbo.collection("products").find().toArray(function(err, result){
            if(err) console.log(err);
            res.json(result);
            db.close();
        });
    });
}) 


module.exports = router;