const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const informacionEnvioShema = new Schema({

    nombre: String,
    id: String,
    direccion: String,  
    ciudad: String,
    observaciones : String,
    departamento : String,
    pais : String,
}, {timestamps:true});

const Envio = mongoose.model('Envio', informacionEnvioShema);

module.exports = {Envio}