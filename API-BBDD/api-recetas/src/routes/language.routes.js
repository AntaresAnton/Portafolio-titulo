import { Router } from "express";
import { methods as recetasController } from "../controllers/recetas.controller";
import { usermethods as userController } from "../controllers/user.controller";
import {products as productosController } from "../controllers/productos.controller";
import { validadorReceta, validadorEditarReceta, validadorEliminarReceta } from './../validators/language.validators';
import { TokenTrue } from "./../middlewares/auth";

// ruta del proyecto
const router = Router();
router.get("/", (req, res) => {
    recetasController.getRecetas(req, res);
});
router.get("/usuario", (req, res) => {
    userController.getUser(req, res);
});
// ========= RECETAS =========
// METODOS POST
router.put('/add-receta', validadorReceta, (req, res) => {
    res.status(200).send('Receta agregada exitosamente'); // http://localhost:3000/add-receta
});
// METODOS PUT
router.put("/edit-receta/:id", validadorEditarReceta, recetasController.updateReceta); // http://localhost:3000/edit-receta/numero
// METODOS DELETE
router.delete("/delete-receta/:id", validadorEliminarReceta, recetasController.deleteReceta); // http://localhost:3000/delete-receta/numero
// METODOS GET
router.get("/receta/:id", recetasController.getReceta); // http://localhost:3000/receta/numero
router.get("/receta-aleatoria", recetasController.recetaRandom); // http://localhost:3000/receta-aleatoria
router.get("/recetas-chile", recetasController.getRecetaCL) // http://localhost:3000/recetas-chile
router.get("/recetas-usa", recetasController.getRecetaUSA) // http://localhost:3000/recetas-usa
router.get("/recetas-gb", recetasController.getRecetaGB) // http://localhost:3000/recetas-gb
router.get("/recetas-canada", recetasController.getRecetaCA) // http://localhost:3000/recetas-canada
router.get("/recetas-es", recetasController.getRecetaES) // http://localhost:3000/recetas-es
router.get("/recetas-mexico", recetasController.getRecetaMX) // http://localhost:3000/recetas-mexico
router.get("/recetas-argentina", recetasController.getReceta_ARG) // http://localhost:3000/recetas-argentina
router.get("/paises", recetasController.getPaises) // http://localhost:3000/paises
router.get("/categorias", recetasController.getCategorias) // http://localhost:3000/categorias
router.get("/categorias-postres", recetasController.getPostres) // http://localhost:3000/categorias-postres
router.get("/categorias-desayuno", recetasController.getDesayuno) // http://localhost:3000/categorias-desayuno
// ========= USUARIOS =========
// METODO GET
router.get("/", userController.getUser); // http://localhost:3000/usuario
router.get("/usuarioejemplo", userController.ejemploUserPaginado); // http://localhost:3000/usuarioejemplo?page=1
// METODO POST
router.post("/usuario"); // http://localhost:3000/usuario
// METODO PUT
router.put("/usuario"); // http://localhost:3000/usuario
// METODO DELETE
router.delete("/usuario"); // http://localhost:3000/usuario
// ========= PRODUCTOS =========
router.get("/productos", productosController.obtenerProducto) // http://localhost:3000/productos

export default router;
module.exports = router