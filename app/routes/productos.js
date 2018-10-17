var express = require('express');
var router = express.Router();
var ProductosCtrl = require('../controllers/productos');

var validateLogin = function(req, res, next) {
	if (req.header('token') != undefined && req.header('token') != ''){
		next();
	} else {
		res.status(403).send({"error":"Usuario no tiene permisos de entrar"});
	}
	
  };

router.route('/')
	.get(ProductosCtrl.findAll)
	.post(validateLogin, ProductosCtrl.insert)

router.route('/:id')
.get(ProductosCtrl.findById)
.put(ProductosCtrl.update)
.delete(ProductosCtrl.delete);

module.exports = router;