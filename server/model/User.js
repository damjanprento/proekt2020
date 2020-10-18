const { number } = require('@hapi/joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3
    },
    lastName: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    dateOfBirth: {
        type: String
    },
    telephone: {
        type: Number,
        requried: false,
        min: 6
    },
    country: {
        type: String
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
})

module.exports = mongoose.model('User', userSchema);