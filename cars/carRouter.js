const express = require('express')
const db = require('../data/dbConfig.js')

const validateCar = require('../middleware/validateCar.js')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error retrieving cars.' })
        })
})

router.post('/', validateCar, (req, res) => {
    const data = req.body

    db('cars')
        .insert(data)
        .then(cars => {
            res.status(201).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error storing car data.' })
        })        
})

module.exports = router