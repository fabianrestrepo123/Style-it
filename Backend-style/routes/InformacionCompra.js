const express = require('express')
const router = express.Router();
const  informacionCompraMocks = require('../utils/Mocks/InformacionCompra')

router.get('/', (req, res) => {

    console.log('request ', req.query)

    res.status(200).json({
        data: informacionCompraMocks,
        message: "Perfiles Listados"
    })
})

router.get('/:profileId', function(req, res) {
    
    const { profileId } = req.params;

    console.log('request ', req.params)

    res.status(200).json({
        data: informacionCompraMocks[0],
        message: 'profile retrieved'
    });
});


router.put('/:productId', function(req, res) {

    const { profileId } = req.params;
    //informacion que voy a actualizar
    const { body: profile } = req;

    res.status(200).json({
        data: informacionCompraMocks,
        message: 'profile updated'
    });
});

router.post('/', (req, res) => {

    console.log('request', req.body)
    const {body: profile } = req;

    informacionCompraMocks.push(profile);

    res.status(200).json({
        data: informacionCompraMocks[informacionCompraMocks.length-1],
        message: 'Perfil agregado'
    })
})


router.delete('/:profileId', function(req, res) {

    const { profileId } = req.params;

    console.log('req ', req.params);

    res.status(200).json({
        data: informacionCompraMocks[profileId],
        message: 'profile deleted'
    });
});

module.exports = router;