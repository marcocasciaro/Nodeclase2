const Joi = require('@hapi/joi');

const schemas = {
    auth : Joi.object().keys({
        user : Joi.string().required(),
        pass : Joi.string().min(3).max(15).required()
    }),
}


module.exports = {schemas}