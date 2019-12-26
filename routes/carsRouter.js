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
    try{
        const ids = await db('cars')
                            .insert(req.body)

        const newCar = await db('cars')
                            .where({ id: ids[0]})
                            .first()
        res
            .status(201)
            .json(newCar)
    }
    catch (error) {
        next(error)
    }
})

router.put('/:id', validateCar(), validateCarId(), async (req, res, next) => {
    try {
        const payload = {
            
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