const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/campaign:
 *   post:
 *     summary: Agregar una nueva campaña.
 *     description: Crea una nueva campaña para un cliente especificado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cliente_id
 *               - nombre_campania
 *               - fechaHoraProgramacion
 *               - estado
 *             properties:
 *               cliente_id:
 *                 type: integer
 *                 description: ID del cliente asociado a la campaña.
 *               nombre_campania:
 *                 type: string
 *                 description: Nombre de la campaña.
 *               fechaHoraProgramacion:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha y hora de la programación de la campaña.
 *               estado:
 *                 type: integer
 *                 description: Estado de la campaña (1: Activa, 0: Inactiva).
 *     responses:
 *       201:
 *         description: Campaña creada exitosamente.
 *       400:
 *         description: Solicitud incorrecta, posiblemente falta algún parámetro.
 */
router.post('/api/campaign', (req, res) => {
    const { cliente_id, nombre_campania, fechaHoraProgramacion, estado } = req.body;

    if (!cliente_id || !nombre_campania || !fechaHoraProgramacion || estado === undefined) {
        return res.status(400).json({ message: 'Faltan parámetros necesarios' });
    }

    // Simula la creación de la campaña (aquí iría la lógica para interactuar con la base de datos)
    const nuevaCampania = {
        idCampania: Date.now(),  // Esto es solo un ejemplo, en la base de datos sería autoincremental
        cliente_id,
        nombre_campania,
        fechaHoraProgramacion,
        estado
    };

    res.status(201).json(nuevaCampania);
});

module.exports = router;
