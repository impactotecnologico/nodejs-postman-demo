var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  console.log('hello world');
  next();
});

router.get('/', function(req, res) {
	console.log(req.body);
	res.json({ message: 'Get recibido' }); 
});

module.exports = router;