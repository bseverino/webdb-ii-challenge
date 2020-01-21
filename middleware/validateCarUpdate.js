const db = require('../data/dbConfig.js')

function validateCar(req, res, next) {
    const body = req.body
    const id = req.params.id

    if (!Object.keys(body).length) {
        res.status(400).json({ message: 'Missing car data.' })
    } else if (body.vin) {
        db('cars')
            .whereNot('id', id)
            .andWhere('vin', body.vin)
            .then(cars => {
                if (cars.length) {
                    res.status(400).json({ message: 'VIN is already registered.' })
                } else if (isNaN(body.vin)) {
                    res.status(400).json({ message: 'VIN must be a number.' })
                }  else if (!body.make) {
                    res.status(400).json({ message: 'Missing required make field.' })
                } else if (!body.model) {
                    res.status(400).json({ message: 'Missing required model field.' })
                } else if (!body.mileage) {
                    res.status(400).json({ message: 'Missing required mileage field.' })
                }  else if (isNaN(body.mileage)) {
                    res.status(400).json({ message: 'Mileage must be a number.' })
                } else {
                    next()
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: 'Error retrieving accounts.' })
            })
    } else {
        res.status(400).json({ message: 'Missing required VIN field.' })
    }
}

module.exports = validateCar