const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const InicioRegistroApiRouter = require('./routes/InicioRegistroApiService');
const InformacionEnvioApiRouter = require('./routes/InformacionEnvioApiService')
const InformacionCompraApiRouter = require('./routes/InformacionCompraApiService')

//app
const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

//routes
app.use('/routes/InicioRegistro', InicioRegistroApiRouter);
app.use('/routes/InformacionEnvio', InformacionEnvioApiRouter);
app.use('/routes/InformacionCompra', InformacionCompraApiRouter);


// redirect
app.get('/', (req, res) =>{
    res.redirect('/routes/InicioRegistro')
});

app.get('/', (req, res) =>{
    res.redirect('/routes/InformacionEnvio')
});

app.get('/', (req, res) =>{
    res.redirect('/routes/InformacionCompra')
});

//inicar servidor 
const server = app.listen(5700, ()=>{
    console.log(`Listening http://localhost:${server.address().port}`)
})

