var express = require('express');
var router = express.Router();
var PedidosCtrl = require('../controllers/pedidos');


router.route('/')
	.get(PedidosCtrl.findAll)
	.post(PedidosCtrl.insert)

router.route('/:id')
.get(PedidosCtrl.findById)
.put(PedidosCtrl.update)
.delete(PedidosCtrl.delete);

module.exports = router;