const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const informacionCompraSchema = new Schema({
    
    cantidad: String,
    id: String,
    numeroTarjeta: String,
    caducidad: String,
    codigoSeguridad: String,
    titularTarjeta: String,
    direccion: String,
    ciudad: String,
    provincia: String,
    codigopostal: String,
      
}, {timestamps:true});

const Compra= mongoose.model("Compra",informacionCompraSchema);

module.exports = {Compra}