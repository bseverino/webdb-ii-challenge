const express = require('express')
const db = require('../data/dbConfig.js')

const router = express.Router()

// return list of sales
router.get('/', (req, res) => {
    db('sales')
        .then(sales => {
            res.status(200).json(sales)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error retrieving sales.' })
        })
})

module.exports = router