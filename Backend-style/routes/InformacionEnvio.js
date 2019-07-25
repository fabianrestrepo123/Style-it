const express = require('express')
const router = express.Router();
const  informacionEnvioMocks =  require('../utils/Mocks/InformacionEnvio')

router.get('/', (req, res) => {

    console.log('request ', req.query)

    res.status(200).json({
        data: informacionEnvioMocks,
        message: "Perfiles Listados"
    })
})

router.get('/:profileId', function(req, res) {
    
    const { profileId } = req.params;

    console.log('request ', req.params)

    res.status(200).json({
        data: informacionEnvioMocks[0],
        message: 'profile retrieved'
    });
});


router.put('/:productId', function(req, res) {

    const { profileId } = req.params;
    //informacion que voy a actualizar
    const { body: profile } = req;

    res.status(200).json({
        data: informacionEnvioMocks,
        message: 'profile updated'
    });
});

router.post('/', (req, res) => {

    console.log('request', req.body)
    const {body: profile } = req;

    informacionEnvioMocks.push(profile);

    res.status(200).json({
        data: informacionEnvioMocks[informacionEnvioMocks.length-1],
        message: 'Perfil agregado'
    })
})


router.delete('/:profileId', function(req, res) {

    const { profileId } = req.params;

    console.log('req ', req.params);

    res.status(200).json({
        data: informacionEnvioMocks[profileId],
        message: 'profile deleted'
    });
});

module.exports = router;