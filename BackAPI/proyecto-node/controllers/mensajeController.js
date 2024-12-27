const MensajeRepository = require('../ado/mensajeRepository');
const mensajeValidator = require('../validators/mensajeValidator');

class MensajeController {
  static async listarMensajesActivos(req, res) {
    try {
      const { error } = mensajeValidator.validate(req.query);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const { mes, clienteId } = req.query;

      const mensajes = await MensajeRepository.listarMensajesActivos(mes, clienteId);
      res.status(200).json(mensajes);
    } catch (err) {
      res.status(500).json({ message: 'Error en el servidor', error: err.message });
    }
  }
}

module.exports = MensajeController;