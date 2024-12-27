 const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
const CampaniaController = require('./controllers/campaniaController');
const MensajeController = require('./controllers/mensajeController');

// Definir las rutas para la API
app.post('/api/campania/agregar', CampaniaController.agregarCampania);
app.get('/api/mensajes', MensajeController.listarMensajesActivos);

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});