const express = require('express')
const router = express.Router()


const {Registros} = require('../models/servidor')

router.get('/', async (req, res, next) => {

    Registros.find().exec()
    .then(InicioRegistro => {
        res.send(InicioRegistro)
    }).catch(err => {
        res.status(409).send(err)
    });

    console.log('request ', req.query);
})

router.get('/:profileId' , async (req, res, next)=>{
    const { profileId } = req.params;

    console.log('request ', req.params)

    Registros.findById(profileId).exec()
    .then(InicioRegistro => 
        InicioRegistro 
        ? 
        res.send(InicioRegistro) 
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

    const {id,nombre,apellidos,email,telefono,contraseña,confirmar_contraseña} = req.body
    const newRegistros = Registros( {id,nombre,apellidos,email,telefono,contraseña,confirmar_contraseña})
    newRegistros.save((err,InicioRegistro)=>{
        err ? res.status(409).send(err) : res.status(201).send(InicioRegistro)
    })

    console.log('request ', req.body);

})

router.put('/:profileId', async (req, res, next) => {

    const { profileId } = req.params;
    
    console.log('req ', req.params, req.body);

    Registros.findByIdAndUpdate(profileId,{$set:req.body},{new:true}).exec()
    .then(InicioRegistro => res.send(InicioRegistro))
    .catch(err => res.status(409).send(err))
})

router.delete('/:profileId', async (req, res, next) => {
    const { profileId } = req.params;

    console.log('req ', req.params);

    Registros.findByIdAndDelete(profileId).exec()
    .then( InicioRegistro => res.send({message : 'Perfil eliminado'}))
    .catch(err => res.status(409).send(err))

})

module.exports = router;