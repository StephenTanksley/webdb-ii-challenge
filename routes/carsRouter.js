const express = require('express')
const db = require('../utils/db')

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

router.get('/:id', async (req, res, next) => {
    try{
        const cars = await db('cars')
                            .where({ id: req.params.id})
                            .first()
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
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