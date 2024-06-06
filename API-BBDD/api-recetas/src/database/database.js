const { Sequelize } = require('sequelize');
const claves = require('./../config'); // Corrige la ruta si es necesario

// Configuración de Sequelize
const sequelize = new Sequelize(claves.database, claves.user, claves.password, {
  host: claves.host,
  dialect: claves.dialect,
});

// Función para obtener la conexión
const getConnection = async () => {
  try {
    // Autenticar la conexión
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');
    return sequelize;
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    throw error;
  }
};

//

// Exportar la función de conexión
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  getConnection
=======
  getConnection,
>>>>>>> upstream/main
=======
  getConnection
>>>>>>> 43df15dbfd66a1f80fe3bc73d61cc6ccd430fe6b
};