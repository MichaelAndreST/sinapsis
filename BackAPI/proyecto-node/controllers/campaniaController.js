const CampaniaRepository = require('../ado/campaniaRepository');
const campaniaValidator = require('../validators/campaniaValidator');

class CampaniaController {
  static async agregarCampania(req, res) {
    try {
      const { error } = campaniaValidator.validate(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });

      const { clienteId, nombreCampania, fechaHoraProgramacion, estado } = req.body;

      await CampaniaRepository.agregarCampania(clienteId, nombreCampania, fechaHoraProgramacion, estado);
      res.status(200).json({ message: 'Campaña agregada exitosamente.' });
    } catch (err) {
      res.status(500).json({ message: 'Error en el servidor', error: err.message });
    }
  }
}

module.exports = CampaniaController;
