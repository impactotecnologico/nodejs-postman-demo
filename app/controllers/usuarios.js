var mongoose = require('mongoose');
var Usuario  = mongoose.model('Usuario');
var url = require('url');
var utils = require('../config');

//GET - Retorna todos los usuarios
exports.findAll = function(req, res) {

	if(req.query != undefined){
		var params = utils.filterValidation(req.query);
	}

	var sort_param = params.sort;
	var order = params.order; 

	if(params.search != null){
		Usuario.find({nombre:params.search}).skip(parseInt(params.skip)).limit(parseInt(params.limit)).sort({sort_param:order}).exec(function(err, usuarios) {
			if(err) res.send(500, err.message);

			console.log('GET /usuarios')
			res.status(200).jsonp(usuarios);
		});
	}else{
		Usuario.find().skip(parseInt(params.skip)).limit(parseInt(params.limit)).sort({sort:order}).exec(function(err, usuarios) {
		if(err) res.send(500, err.message);

			console.log('GET /usuarios')
			res.status(200).jsonp(usuarios);
		});
	}
};

//GET - Retorna un usuario por ID
exports.findById = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {
    if(err) return res.send(500, err.message);

    	console.log('GET /usuarios/' + req.params.id);
		res.status(200).jsonp(user);
	});
};

//POST - Inserta un nuevo usuario
exports.insert = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var user = new Usuario({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		dni: req.body.dni,
		email: req.body.email,
		password: req.body.password
	});

	user.save(function(err, usuario) {
		if(err) return res.status(500).send( err.message);
    	res.status(201).jsonp(usuario);
	});
};

//PUT - Actualiza un registro de usuario
exports.update = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {

		if (user != null){
			user.nombre   = req.body.nombre;
			user.apellido    = req.body.apellido;
			user.dni = req.body.dni;
			user.email  = req.body.email;
			user.password = req.body.password;

			user.save(function(err) {
				if(err) return res.status(500).send(err.message);
				res.status(200).jsonp(user);
			});
		} else {
			res.status(404).send({"error":"Usuario no encontrado"});
		}

		
	});
};

//PATCH - Actualiza un registro de usuario
exports.patch = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {

		if (user != null){

			if (req.body.nombre != undefined &&
				req.body.apellido != undefined &&
				req.body.dni != undefined &&
				req.body.email != undefined &&
				req.body.password != undefined){

					res.status(409).send({"error":"Para actualizar todo el objeto debe usarse PUT"});

			} else {
				if (req.body.nombre != undefined){
					user.nombre   = req.body.nombre;
				}
				if (req.body.apellido != undefined){
					user.apellido   = req.body.apellido;
				}
				if (req.body.dni != undefined){
					user.dni   = req.body.dni;
				}
				if (req.body.email != undefined){
					user.email   = req.body.email;
				}
				if (req.body.password != undefined){
					user.password   = req.body.password;
				}

				user.save(function(err) {
					if(err) return res.status(500).send(err.message);
					res.status(200).jsonp(user);
				});
			}

			
		} else {
			res.status(404).send({"error":"Usuario no encontrado"});
		}

		
	});
};

//DELETE - Elimina un registro de usuario
exports.delete = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {
		if (user != null) {
			user.remove(function(err) {
				if(err) return res.status(500).send(err.message);
				  res.status(204).send();
			})
		} else {
			res.status(404).send({"error":"Usuario no encontrado"});
		}
		
	});
};

