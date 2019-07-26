const express = require('express')
const router = express.Router();
const  informacionEnvioMocks =  require('../utils/Mocks/InformacionEnvioMocks')

router.get('/', (req, res) => {
    const { query } = req.query

    res.status(200).json({
        data: informacionEnvioMocks,
        message: "Perfiles Listados"
    })
})

module.exports = router;