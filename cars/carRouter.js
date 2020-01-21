const express = require('express')
const db = require('../data/dbConfig.js')

const validateCar = require('../middleware/validateCar.js')
const validateId = require('../middleware/validateId.js')

const router = express.Router()

// return list of cars
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

// return car by id
router.get('/:id', validateId, (req, res) => {
    res.status(200).json(req.car)
})

// register a new car
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