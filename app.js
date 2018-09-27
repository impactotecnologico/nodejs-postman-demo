var express      = require('express');        // call express
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
require('./app/models/usuario.js');
require('./app/models/producto.js');
require('./app/models/pedido.js');

var app          = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;



const options = {
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 500, 
    poolSize: 10, 
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, 
    socketTimeoutMS: 45000, 
    useNewUrlParser: true
  };


mongoose.connect("mongodb://localhost/postman-test", options).then(
    () => { console.log("Conectado"); },
    err => { console.log("Error conectando" , err); }
  );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting with mongodb database:'));

db.once('open', function() {
console.log('Connected to mongodb database');
});    

db.on('disconnected', function () {
    //Reconnect on timeout
    mongoose.connect("mongodb://localhost/postman-test");
    db = mongoose.connection;
});  

var port = process.env.PORT || 8051; 

var usuariosRoutes= require('./app/routes/usuarios');
var productosRoutes= require('./app/routes/productos');
var pedidosRoutes= require('./app/routes/pedidos');

app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);

app.listen(port);
console.log("Server started at " + port);