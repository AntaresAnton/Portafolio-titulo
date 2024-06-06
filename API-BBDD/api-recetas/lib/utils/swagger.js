"use strict";

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// Opciones para la documentación
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'api-recetas-del-mundo',
      version: '1.5.0',
<<<<<<< HEAD
      description: 'Documentación de la API REST de Creada para Proyecto Portafolio de Titulo - Johanna Hernandez - Patricio Quintanilla - Claudio Sanchez - Italo Brignardello',
      contact: {
        name: 'Johanna Hernandez - Patricio Quintanilla - Claudio Sanchez - Italo Brignardello',
=======
      description: 'Documentación de la API REST de Creada para Proyecto Portafolio de Titulo - Johanna Hernandez - Patricio Quintanilla - Claudio Sanchez -  Italo B******** ',
      contact: {
        name: 'Johanna Hernandez - Patricio Quintanilla - Claudio Sanchez -  Italo B********',
>>>>>>> 43df15dbfd66a1f80fe3bc73d61cc6ccd430fe6b
        url: 'https://github.com/AntaresAnton/Portafolio-titulo'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      },
      servers: [{
        url: 'http://api.recetasdelmundo.uno',
        description: 'Producción'
      }, {
        url: 'http://localhost:3000',
        description: 'Desarrollo'
      }],
      termsOfService: 'https://github.com/AntaresAnton/Portafolio-titulo/blob/main/LICENSE'
    }
  },
  // Ruta a los archivos donde se encuentra documentada la API
  apis: ['src/routes/*.js']
};
const specs = swaggerJsdoc(options);
module.exports = app => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};