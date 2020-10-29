const { number } = require('@hapi/joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        min: 1
    },
    productDescription: {
        type: String,
        required: true,
        min: 1
    },
    productType: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    purchaseDate: {
        type: String
    },
    productPrice: {
        type: Number,
        requried: true
    }
})

module.exports = mongoose.model('Product', productSchema);