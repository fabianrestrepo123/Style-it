const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inicioRegistroSchema = new Schema({
    
    nombres: String,
    apellidos: String,
    email: String,
    telefono : String,
    contraseña: String,
    confirmar_contraseña: String,
      
}, {timestamps:true});

const Registros= mongoose.model("Registros",inicioRegistroSchema);

module.exports = {Registros}
