const router = require('express').Router();
const User = require('../model/User');
const {registerValidation } = require('../validation');

router.post('/register', async (req, res) => {
    
    //Validating data before making a user
    
    if(error) {
        return res.status(400).send(res.send(error.details[0].message));
    }

    const user = new User({
        firstName: req.body.fristName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        telephone: req.body.telephone,
        country: req.body.country,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }
});

router.post('/login');

module.exports = router;