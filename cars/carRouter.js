const express = require('express')
const db = require('../data/dbConfig.js')

const validateCar = require('../middleware/validateCar.js')
const validateCarUpdate = require('../middleware/validateCarUpdate.js')
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

// update a car
router.put('/:id', validateId, validateCarUpdate, (req, res) => {
    const id = req.params.id
    const data = req.body

    db('cars')
        .where('id', id)
        .update({
            vin: data.vin,
            make: data.make,
            model: data.model,
            mileage: data.mileage,
            transmission: data.transmission,
            title: data.title
        })
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error updating car.'
            })
        })
})

module.exports = router