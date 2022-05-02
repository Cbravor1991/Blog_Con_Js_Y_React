'use strict'

var express = require ('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS

//Añadir prefijos a rutas
app.use('/api', article_routes);

//Ruta o metodo de prueba para el API REST

/*app.post('/datos-curso', (req, res)=>{
    var hola = req.body.hola;

    return res.status(200).send({
        curso: 'Master en framework',
        autor: 'Victor Robles WEB',
        url: 'victorroblesweb.es',
        hola
    });


});*/

// Exportar modulo (fichero actual)
module.exports = app;