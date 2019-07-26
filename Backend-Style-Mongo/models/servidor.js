const mongoose = require('mongoose');
const {Registros} = require('./InicioRegistroModel')
const {Envio} = require('./InformacionEnvioModel')
const {Compra} = require('./InformacionCompraModel')

const DB_URL_MONGO = 'mongodb+srv://Fabian:restrepo1400@clusterbackendprofiles-pfeaa.mongodb.net/test?retryWrites=true&w=majority'

//Cadena de conexión y se manda a llamar los modelos
mongoose.connect(DB_URL_MONGO,{ useNewUrlParser: true },(err)=>{
  if (!err) console.log('Conexión exitosa');
});

module.exports = {
  Registros,Envio,Compra
}