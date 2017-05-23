var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Image Scrabble Game' });
});

/*get (por medio de URL), about es la ruta que se le escribe en la URL*/
/*SI NO SE ENVIA UNA RESPUESTA AL CLIENTE, SE QUEDA GUINDADO*/
router.get('/about', function(req, res, next){
  res.render('about', {"msg":"Hola Mundo!!"});
  /*res.json();
  res.send();
  res.download();*/
});

router.get('/contact', function(req, res, next){
  res.render('contact', { "image": "images/IMG_20161227_150142.jpg"});
});

module.exports = router;
