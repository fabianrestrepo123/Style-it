const express = require('express')
const router = express.Router();
const  informacionCompraMocks = require('../utils/Mocks/InformacionCompraMocks')

router.get('/', (req, res) => {

    console.log('request ', req.query)

    res.status(200).json({
        data: informacionCompraMocks,
        message: "Perfiles Listados"
    })
})

