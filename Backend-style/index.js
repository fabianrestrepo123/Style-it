const express = require('express')
const bodyParser = require('body-parser')


const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//routes
const registroInicioApiRouter = require('./routes/InicioRegistro')
const informacionCompraApiRouter = require('./routes/InformacionCompra')
const informacionEnvioApiRouter = require('./routes/InformacionEnvio')

//routes 
app.use('/routes/InicioRegistro',registroInicioApiRouter)
app.use ('/routes/InformacionCompra',informacionCompraApiRouter)
app.use ('/routes/InformacionEnvio', informacionEnvioApiRouter)


//inicar servidor 
const server = app.listen(5700, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})

