const Joi = require('@hapi/joi');

const schemas = {
    create : Joi.object().keys({
        nombre : Joi.string().required(),
        fecha_de_nacimiento : Joi.date().required(),
        id_hospital : Joi.number().required(),
        sueldo : Joi.number().required()
    }),
}


module.exports = {schemas}