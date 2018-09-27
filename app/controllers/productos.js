var mongoose = require('mongoose');
var Producto  = mongoose.model('Producto');
var utils = require('../config');

//GET - Retorna todos los productos
exports.findAll = function(req, res) {
	if(req.query != undefined){
		var params = utils.filterValidation(req.query);
	}

	var sort_param = params.sort;
	var order = params.order; 

	if(params.search != null){
		Producto.find({nombre:params.search}).skip(parseInt(params.skip)).limit(parseInt(params.limit)).sort({sort_param:order}).exec(function(err, productos) {
			if(err) res.send(500, err.message);

			console.log('GET /productos')
			res.status(200).jsonp(productos);
		});
	}else{
		Producto.find().skip(parseInt(params.skip)).limit(parseInt(params.limit)).sort({sort_param:order}).exec(function(err, productos) {
			if(err) res.send(500, err.message);

			console.log('GET /productos')
			res.status(200).jsonp(productos);
		});
	}
};

//GET - Retorna un producto por ID
exports.findById = function(req, res) {
	Producto.findById(req.params.id, function(err, prod) {
    if(err) return res.send(500, err.message);

    	console.log('GET /productos/' + req.params.id);
		res.status(200).jsonp(prod);
	});
};

//POST - Inserta un nuevo producto
exports.insert = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var prod = new Producto({
		nombre: req.body.nombre,
		descripcion: req.body.descripcion,
		stock: req.body.stock,
		precio_unitario: req.body.precio_unitario
	});

	prod.save(function(err, prod) {
		if(err) return res.status(500).send( err.message);
    	res.status(200).jsonp(prod);
	});
};

//PUT - Actualiza un registro de producto
exports.update = function(req, res) {
	Producto.findById(req.params.id, function(err, prod) {
		prod.nombre   = req.body.nombre;
		prod.descripcion    = req.body.descripcion;
		prod.stock = req.body.stock;
		prod.precio_unitario  = req.body.precio_unitario;

		prod.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).jsonp(prod);
		});
	});
};

//DELETE - Elimina un registro de producto
exports.delete = function(req, res) {
	Producto.findById(req.params.id, function(err, prod) {
		prod.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		})
	});
};