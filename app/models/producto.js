var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Producto = new Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion: {
        type: String,
        required: false
    },
    stock:{
        type:Number,
        required:true
    },
    precio_unitario:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Producto', Producto);