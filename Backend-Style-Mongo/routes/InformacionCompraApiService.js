const express = require('express')
const router = express.Router()


const {Compra} = require('../models/servidor')

router.get('/', async (req, res, next) => {

    Compra.find().exec()
    .then(InformacionCompra => {
        res.send(InformacionCompra)
    }).catch(err => {
        res.status(409).send(err)
    });

    console.log('request ', req.query);
})

router.get('/:profileId' , async (req, res, next)=>{
    const { profileId } = req.params;

    console.log('request ', req.params)

    Compra.findById(profileId).exec()
    .then(InformacionCompra => 
        InformacionCompra 
        ? 
        res.send(InformacionCompra) 
        : 
        res.status(404).send(
            {
                message : 'Perfil not found'
            }
        )
    ).catch(err =>
        res.status(409).send(err))

})

router.post('/', (req, res, next) => {

    const {cantidad,id,numeroTarjeta,caducidad,codigoSeguridad,titularTarjeta,direccion,ciudad,provincia,codigopostal} = req.body
    const newCompra = Compra( {cantidad,id,numeroTarjeta,caducidad,codigoSeguridad,titularTarjeta,direccion,ciudad,provincia,codigopostal})
    newCompra.save((err,InformacionCompra)=>{
        err ? res.status(409).send(err) : res.status(201).send(InformacionCompra)
    })

    console.log('request ', req.body);

})

router.put('/:profileId', async (req, res, next) => {

    const { profileId } = req.params;
    
    console.log('req ', req.params, req.body);

     Compra.findByIdAndUpdate(profileId,{$set:req.body},{new:true}).exec()
    .then(InformacionCompra => res.send(InformacionCompra))
    .catch(err => res.status(409).send(err))
})

router.delete('/:profileId', async (req, res, next) => {
    const { profileId } = req.params;

    console.log('req ', req.params);

    Compra.findByIdAndDelete(profileId).exec()
    .then( InformacionCompra => res.send({message : 'Perfil eliminado'}))
    .catch(err => res.status(409).send(err))

})

module.exports = router;