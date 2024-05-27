// Objetivo: archivo principal de la aplicación
require('dotenv').config();
//SWAGGER
const swaggerConfig = require('./utils/swagger');
//IMPORTO EXPRESS
const express = require('express');
//INICIALIZO EXPRESS
const app = express();
// Configurar Swagger
swaggerConfig(app);
//CONFIGURACIONES
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
app.use(express.json()); //PARA QUE EXPRESS LEA JSON DEL BODY
app.use(express.urlencoded({ extended: false })); //PARA QUE EXPRESS LEA FORMULARIOS
//IMPORTO RUTAS
const usuarioRoutes = require('./routes/usuario.routes');
const loginRoutes = require('./routes/login.routes');
const recetasRoutes = require('./routes/recetas.routes');
const paisesRoutes = require('./routes/paises.routes');
const categoriasRoutes = require('./routes/categorias.routes');
//RUTAS
app.use('/usuario', usuarioRoutes);
app.use('/auth', loginRoutes);
app.use('/recetas', recetasRoutes);
app.use('/pais', paisesRoutes);
app.use('/categoria', categoriasRoutes);
//RUTA POR DEFECTO
app.all('*', (req, res) => {
    res.json(
        {
            "ok": false,
            "msj": "URL no encontrada"
        }
    );
})
//INICIO SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`servidor iniciado, escuchando en el puerto ${process.env.PORT}`);
});