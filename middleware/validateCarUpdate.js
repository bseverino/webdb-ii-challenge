function validateCarUpdate(req, res, next) {
    const body = req.body

    if (!Object.keys(body).length) {
        res.status(400).json({ message: 'Missing car data.' })
    } else if (!body.vin) {
        res.status(500).json({ message: 'Missing required VIN.' })
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
}

module.exports = validateCarUpdate