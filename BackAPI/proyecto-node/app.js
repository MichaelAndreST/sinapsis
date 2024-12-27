const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const messagesRoutes = require('./routes/mensaje');
const campaignRoutes = require('./routes/campaign');  // Importa las rutas de campaña

const app = express();

// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Mensajes y Campañas',
            version: '1.0.0',
            description: 'API para gestionar mensajes y campañas',
        },
    },
    apis: ['./routes/*.js'], // Ruta donde se encuentran las anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Usar las rutas de mensajes y campañas
app.use(express.json());  // Para procesar el cuerpo de la solicitud JSON
app.use(messagesRoutes);
app.use(campaignRoutes);  // Agregar las rutas de campaña

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    console.log(`Documentación de la API en http://localhost:${port}/api-docs`);
});