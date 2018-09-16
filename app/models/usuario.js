var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Usuario = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido: {
        type: String,
        required: false
    },
    dni:{
        type:String,
        required:true,
        index: {unique: true}
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Usuario', Usuario);