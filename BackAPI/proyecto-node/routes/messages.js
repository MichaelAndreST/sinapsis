const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Obtiene todos los mensajes activos filtrados por fecha de envío.
 *     description: Lista todos los mensajes activos filtrados por fecha y hora de envío. Opcionalmente se puede filtrar por `idCliente`.
 *     parameters:
 *       - name: fechaHoraEnvio
 *         in: query
 *         description: La fecha y hora de envío para filtrar los mensajes (formato: yyyy-mm-dd).
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - name: cliente_id
 *         in: query
 *         description: ID del cliente para filtrar los mensajes (opcional).
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mensajes obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idMensaje:
 *                     type: integer
 *                   mensaje:
 *                     type: string
 *                   estado:
 *                     type: integer
 *                   fechaHoraEnvio:
 *                     type: string
 *                     format: date-time
 *                   cliente_id:
 *                     type: integer
 */
router.get('/api/messages', (req, res) => {
    const { fechaHoraEnvio, cliente_id } = req.query;

    // Lógica para filtrar los mensajes (aquí iría tu consulta a la base de datos)
    // Este es un ejemplo simulado de los mensajes
    const mensajes = [
        { idMensaje: 1, mensaje: 'Mensaje 1', estado: 1, fechaHoraEnvio: '2024-12-27T10:00:00', idCliente: 101 },
        { idMensaje: 2, mensaje: 'Mensaje 2', estado: 0, fechaHoraEnvio: '2024-12-25T09:00:00', idCliente: 102 },
        { idMensaje: 3, mensaje: 'Mensaje 3', estado: 1, fechaHoraEnvio: '2024-12-27T11:30:00', idCliente: 101 },
    ];

    // Filtrar los mensajes por fecha de envío
    let resultado = mensajes.filter(mensaje => mensaje.fechaHoraEnvio.startsWith(fechaHoraEnvio));

    // Si se proporciona un `cliente_id`, también filtrar por ese
    if (cliente_id) {
        resultado = resultado.filter(mensaje => mensaje.idCliente == cliente_id);
    }

    res.json(resultado);
});

module.exports = router;