var mongoose = require('mongoose');
var Usuario  = mongoose.model('Usuario');

//GET - Retorna todos los usuarios
exports.findAll = function(req, res) {
	Usuario.find(function(err, usuarios) {
    if(err) res.send(500, err.message);

	    console.log('GET /usuarios')
		res.status(200).jsonp(usuarios);
	});
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
    	res.status(200).jsonp(usuario);
	});
};

//PUT - Actualiza un registro de usuario
exports.update = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {
		user.nombre   = req.body.nombre;
		user.apellido    = req.body.apellido;
		user.dni = req.body.dni;
		user.email  = req.body.email;
		user.password = req.body.password;

		user.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).jsonp(user);
		});
	});
};

//DELETE - Elimina un registro de usuario
exports.delete = function(req, res) {
	Usuario.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		})
	});
};