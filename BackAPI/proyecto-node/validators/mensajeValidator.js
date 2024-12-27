 const Joi = require('joi');

const mensajeValidator = Joi.object({
  mes: Joi.number().integer().min(1).max(12).required(),
  clienteId: Joi.number().integer().min(1).optional()
});

module.exports = mensajeValidator;