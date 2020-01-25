const db = require('../data/dbConfig.js')

function validateId(req, res, next) {
    const id = req.params.id
    db('cars')
        .where('id', id)
        .then(car => {
            if (!car.length) {
                res.status(400).json({ message: 'Invalid id.' })
            } else {
                req.car = car
                next()
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error retrieving id.' })
        })
}

module.exports = validateId