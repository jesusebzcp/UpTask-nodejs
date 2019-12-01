//Express router
const express = require('express');
const router = express.Router();
//importar el controlador
const proyectosController = require('../controllers/proyectosController')
    //exportamos
module.exports = function() {

    //res es la respuesta del servidor 
    //rutas para el Home

    router.get('/', proyectosController.proyectosHome);
    //RUTA PARA NUEVO Proyecto

    router.get('/nuevo-Proyecto', proyectosController.formularioProyecto);

    //cambiar el motodo a POST para enviar el formulario
    router.post('/nuevo-Proyecto', proyectosController.nuevoProyecto);




    //Para hacerlo disponible en el otro archivo
    return router;

}