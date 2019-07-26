const express = require('express')
const router = express.Router()


const {Envio} = require('../models/servidor')

router.get('/', async (req, res, next) => {

    Envio.find().exec()
    .then(InformacionEnvio => {
        res.send(InformacionEnvio)
    }).catch(err => {
        res.status(409).send(err)
    });

    console.log('request ', req.query);
})

router.get('/:profileId' , async (req, res, next)=>{
    const { profileId } = req.params;

    console.log('request ', req.params)

    Envio.findById(profileId).exec()
    .then(InformacionEnvio => 
        InformacionEnvio 
        ? 
        res.send(InformacionEnvio) 
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

    const {nombre,id,direccion,ciuda,observaciones,departamento,pais} = req.body
    const newEnvio = Envio( {nombre,id,direccion,ciuda,observaciones,departamento,pais})
    newEnvio.save((err,InformacionEnvio)=>{
        err ? res.status(409).send(err) : res.status(201).send(InformacionEnvio)
    })

    console.log('request ', req.body);

})

router.put('/:profileId', async (req, res, next) => {

    const { profileId } = req.params;
    
    console.log('req ', req.params, req.body);

    Envio.findByIdAndUpdate(profileId,{$set:req.body},{new:true}).exec()
    .then(InformacionEnvio => res.send(InformacionEnvio))
    .catch(err => res.status(409).send(err))
})

router.delete('/:profileId', async (req, res, next) => {
    const { profileId } = req.params;

    console.log('req ', req.params);

    Envio.findByIdAndDelete(profileId).exec()
    .then( InformacionEnvio => res.send({message : 'Perfil eliminado'}))
    .catch(err => res.status(409).send(err))

})

module.exports = router;