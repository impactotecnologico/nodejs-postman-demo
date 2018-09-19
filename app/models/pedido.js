var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pedido = new Schema({
    nro:{
        type:Number,
		required:true,
		index: {unique: true}
    },
    usuario: {
        type: String,
        required: true
    },
    fecha_ultima_actualizacion:{
        type:Date,
		required:true
	},
    productos:{
        type:Array,
        required:true
    },
    total:{
        type:Number,
        required:true
	},
	estatus:{
		type:Boolean,
		required: true
	},
	fecha_finalizacion:{
		type: Date,
		required: false
	}
});

module.exports = mongoose.model('Pedido', Pedido);