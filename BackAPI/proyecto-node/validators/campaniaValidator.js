 const Joi = require('joi');

const campaniaValidator = Joi.object({
  clienteId: Joi.number().integer().min(1).required(),
  nombreCampania: Joi.string().max(200).required(),
  fechaHoraProgramacion: Joi.date().greater('now').required(),
  estado: Joi.number().valid(0, 1).required()
});

module.exports = campaniaValidator;