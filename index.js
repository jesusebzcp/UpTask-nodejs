//Express no soporta la sintaxis de EMS6 por lo tanto se importantan lo modulos de la siguiente manera
const express = require('express');
//Importamos el router
const routes = require('./routes')
    //Crear una aplicacon de express
const path = require('path')
    //agg libreria bodyparser
const bodyparser = require('body-parser')
const app = express();
//Donde cargar los archivos staticos
app.use(express.static('public'))


//Habilitar PUG
app.set('view engine', 'pug');

//Agg carpeta de las vista 
app.set('views', path.join(__dirname, './view'));
//Habilitar BODYPARSER pata leer datos del formulario

app.use(bodyparser.urlencoded({ extended: true }))
app.use('/', routes());

//le decimos a express que puerto corre (7000)
app.listen(7000);