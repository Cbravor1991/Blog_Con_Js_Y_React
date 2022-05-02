'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

//Configurando el modulo descargado connect.multiparty 
var multipart = require('connect-multiparty');
//Donde se va a guardar lo que se suba
var md_upload = multipart({uploadDir: './upload/articles'})

//Rutas de prueba
router.post('/datos-curso', ArticleController.datoCurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas útiles
router.post('/save', ArticleController.save);
//si usas un variable opcional dentro del controlador lo pasas con ?
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
//el metodo put lo utilizo para actualizar la base de datos
router.put('/article/:id', ArticleController.update);
// el metodo delete lo uso para borrar de la base de datos
router.delete('/article/:id', ArticleController.delete);
//La llamada necesaria para subir archivos
router.post('/upload-image/:id', md_upload ,ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);



module.exports = router;

//el modulo de las rutas debe ser utilizada en app.js para que funcionen