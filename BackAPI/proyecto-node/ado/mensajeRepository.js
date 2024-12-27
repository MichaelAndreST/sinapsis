 const db = require('../config/db');

class MensajeRepository {
  static listarMensajesActivos(pMes, pClienteId = null) {
    return new Promise((resolve, reject) => {
      db.query(
        'CALL sp_listar_mensajes_activos(?, ?)',
        [pMes, pClienteId],
        (err, results) => {
          if (err) reject(err);
          resolve(results[0]);
        }
      );
    });
  }
}

module.exports = MensajeRepository;