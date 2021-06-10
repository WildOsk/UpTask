//import express from 'express':
//const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const sequelize = require('./config/db');
require('./models/Proyectos');



const PORT = process.env.PORT || 3000;
//crear una app de express
const app = express();

//donde cargar los archivos estaticos
app.use(express.static('public'));


//habilitar pug
app.set('view engine', 'pug');

//añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//HABILITAR bodyParser para leer datos de formulario bodyParser is deprecated
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));


//ruta para el home
app.use('/', routes() );


app.listen(PORT, async () =>{//puerto en el que quieres lanzar el server
    console.log(`La app ha arrancado en el http://localhost:${PORT}`);

    //conectar a la BBDD
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});