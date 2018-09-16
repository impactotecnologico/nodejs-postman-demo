var express = require('express');
var router = express.Router();
var ProductosCtrl = require('../controllers/productos');


router.route('/')
	.get(ProductosCtrl.findAll)
	.post(ProductosCtrl.insert)

router.route('/:id')
.get(ProductosCtrl.findById)
.put(ProductosCtrl.update)
.delete(ProductosCtrl.delete);

module.exports = router;