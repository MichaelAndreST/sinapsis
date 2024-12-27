const db = require('../config/db');

class CampaniaRepository {
  static agregarCampania(clienteId, nombreCampania, fechaHoraProgramacion, estado) {
    return new Promise((resolve, reject) => {
      db.query(
        'CALL sp_agregar_campania_por_cliente(?, ?, ?, ?)',
        [clienteId, nombreCampania, fechaHoraProgramacion, estado],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }
}

module.exports = CampaniaRepository;
