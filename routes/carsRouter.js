const express = require('express')
const db = require('../utils/db')

const { validateCarId, validateCar } = require('../middleware/validate')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try{
        const cars = await db('cars').select()
        res
            .json(cars)
    }
    catch (error) {
        next(error)
    }
})

router.get('/:id', validateCarId(), async (req, res, next) => {
    try{
        const cars = await db('cars')
                            .where({ id: req.params.id})
                            .first()
        res
            .json(cars)
    }
    catch (error) {
        next(error)
    }
})

router.post('/', validateCar(), async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileage: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        }

        const [id] = await db('cars').insert(payload)
       
        res.json(await db('cars')
            .where('id', id)
            .first())
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', validateCar(), validateCarId(), async (req, res, next) => {
    try {
        const payload = {
            vin: req.body.vin,
            make: req.body.make,
            model: req.body.model,
            mileate: req.body.mileage,
            transmission: req.body.transmission,
            title: req.body.title
        }
    }
    catch (error) {
        next(error)
    }
})

router.delete('/:id', validateCarId(), async (req, res, next) => {
    try {

    }
    catch (error) {
        next(error)
    }
})

module.exports = router