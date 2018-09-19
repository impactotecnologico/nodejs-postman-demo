var mongoose = require('mongoose');
var Pedido  = mongoose.model('Pedido');

//GET - Retorna todos los pedidos
exports.findAll = function(req, res) {
	Pedido.find(function(err, pedidos) {
    if(err) res.send(500, err.message);

	    console.log('GET /pedidos')
		res.status(200).jsonp(pedidos);
	});
};

//GET - Retorna un pedido por ID
exports.findById = function(req, res) {
	Pedido.findById(req.params.id, function(err, ped) {
    if(err) return res.send(500, err.message);

    	console.log('GET /pedidos/' + req.params.id);
		res.status(200).jsonp(ped);
	});
};

//POST - Inserta un nuevo pedido
exports.insert = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var ped = new Pedido({
		nro: req.body.nro,
		usuario: req.body.usuario,
		fecha_ultima_actualizacion: req.body.fecha_ultima_actualizacion,
		productos: req.body.productos,
		total: req.body.total, 
		estatus: true,
		fecha_finalizacion: null
	});

	ped.save(function(err, ped) {
		if(err) return res.status(500).send( err.message);
    	res.status(200).jsonp(ped);
	});
};

//PUT - Actualiza un registro de pedido
exports.update = function(req, res) {
	Pedido.findById(req.params.id, function(err, ped) {
		ped.nro = req.body.nro;
		ped.usuario = req.body.usuario;
		ped.fecha_ultima_actualizacion = req.body.fecha_ultima_actualizacion;
		ped.productos = req.body.productos;
		ped.total = req.body.total; 
		ped.estatus = true;
		ped.fecha_finalizacion = req.body.fecha_finalizacion;

		ped.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).jsonp(ped);
		});
	});
};

//DELETE - Elimina un registro de pedido
exports.delete = function(req, res) {
	Pedido.findById(req.params.id, function(err, ped) {
		ped.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		})
	});
};