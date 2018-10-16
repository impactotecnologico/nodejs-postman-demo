var express = require('express');
var router = express.Router();
var UsuarioCtrl = require('../controllers/usuarios');


router.route('/')
	.get(UsuarioCtrl.findAll)
	.post(UsuarioCtrl.insert)

router.route('/:id')
.get(UsuarioCtrl.findById)
.put(UsuarioCtrl.update)
.delete(UsuarioCtrl.delete)
.patch(UsuarioCtrl.patch);

module.exports = router;