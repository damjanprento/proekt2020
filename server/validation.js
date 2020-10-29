//VALIDATION
const { required } = require('@hapi/joi');
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
    const schema = Joi.object ({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        dateOfBirth: Joi.string().required(),
        mobile: Joi.number().min(6).required(),
        country: Joi.string().required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object ({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const newProductValidation = (data) => {
    const schema = Joi.object ({
        productName: Joi.string().min(1).required(),
        productDescription: Joi.string().min(1).required(),
        productType: Joi.string().min(1).required(),
        purchaseDate: Joi.string().required(),
        productPrice: Joi.number().required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.newProductValidation = newProductValidation;

