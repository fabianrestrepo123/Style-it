const express = require('express')
const router = express.Router();
const inicioRegistroMocks = require('../utils/Mocks/InicioRegistroMocks')

router.get('/', (req, res) => {
    const { query } = req.query
    res.status(200).json({
        data: inicioRegistroMocks,
        message: "Perfiles Listados"
    })
})

module.exports = router;