'use strict'
//Importaciones
var validator = require('validator');
//Usamos las librerias para borrar y la libreria path de node
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');
const article = require('../models/article');

const { exists } = require('../models/article');
var controller = {

    datoCurso: (req, res) => {
        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en framework',
            autor: 'Victor Robles WEB',
            url: 'victorroblesweb.es',
            hola
        });

    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        //Recoger parametros por post
        var params = req.body;


        //Validar datos(validator) ver las validaciones en internet
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar !!!'
            });

        }

        if (validate_content && validate_content) {
            //Crear el objeto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;


            //Guardar el articulo
            article.save((err, articleStored) => {

                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado !!!'

                    });
                }

                return res.status(200).send({
                    status: 'success',
                    artcle: articleStored
                });





            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son enviados !!!'
            });

        }


    },

    getArticles: (req, res) => {
        //Reutilizar la query find escribimos 
        //TAREA CREAR 7 ARTICULOS Y PROBAR QUE ANDE LA LLAMADA DE LAST
        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(3);
        }



        //Find (acciones propias de la base de dato)
        //ordenar los articulos por id en forma descendente
        query.find({}).sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los archivos !!!'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'

                });
            }

            return res.status(200).send({
                status: 'succes',
                articles
            });

        });

    },

    getArticle: (req, res) => {

        // Recoger el id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo !!!'
            });

        }
        //Metodo de mongodb que busca articulos
        Article.findById(articleId, (err, article) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los datos !!! '
                });
            }

            if (!article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo !!! '
                });
            }

            //Devolverlo en json
            return res.status(404).send({
                status: 'success',
                article
            });

        });



    },


    //Metodo del controlador article: UPDATE (Actualizar los items de la base de datos)   

    update: (req, res) => {
        // Recoger el id del articulo para la url
        var articleId = req.params.id;

        //Recoger los datos que llegan por put
        var params = req.body;

        //Validar los datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'Falta datos para enviar EN UPDATE  !!!'
            });

        }

        if (validate_title && validate_content) {
            //Metodo de mongodb que busca y actualiza articulos
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdate) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar !!!'
                    });
                }

                if (!articleUpdate) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo EN UPDATE !!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdate
                });
            });
        } else {
            //Si la validacion fue incorrecta es necesario 
            return res.status(200).send({
                status: 'error',
                message: 'La validación no es correcta !!!'
            });
        }

    },

    delete: (req, res) => {

        // Recoger el id de la url
        var articleId = req.params.id;

        //Aplicar la instrucción de mongo de buscar y borrar
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            //Error de cualuqier tipo
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });

            }

            //No hay articulo para borrar
            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });

            }

            return res.status(200).send({
                status: 'succes',
                article: articleRemoved
            });
            
        }
        
        
        );

       

    },

    upload:(req, res) => {
        //Configurar el modulo connect multiparty router/article.js (hecho en router)

        //Recoger el fichero de la peticion
        var file_name ='Imagen no subida ...';
        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        //Conseguir nombre y la extension del archivo
        //fijate que tienen que tener el nombre image no file0
        var file_path = req.files.image.path;
        var file_split = file_path.split('/');

        //Nombre del archivo
        var file_name = file_split[2];

        // Extension del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];
        
        //Comprobar si es una imagen sino borras la imagen
        if(file_ext!= 'png' && file_ext!= 'jpg' && file_ext!= 'jpeg' && file_ext!= 'gif'){
            //borrar el archivo subido usamos la libreria fs
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida !!!'
                });

            });

        }else{
            // Si todo es valido. sacando ide de la url
            var articleId = req.params.id;

            //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
           Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new: true}, (err, articleUpdated ) => {
               if(err || !articleUpdated){
                return res.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen de articulo !!!'
                });
                   
               }

               return res.status(200).send({
                status: 'success',
                message: articleUpdated
            });
           })
        }



        

    },

    getImage: (req, res) => {
        var file = req.params.image;
        var path_file = './upload/articles/' + file;
     
        fs.access(path_file, fs.constants.F_OK, (err) => {
          if (err) {
            return res.status(200).send({
              status: 'error',
              message: 'Das Bild existiert nicht!!'
            });
          } else {
            return res.sendFile(path.resolve(path_file));
          }
        });
      }

}; //end controller

module.exports = controller;