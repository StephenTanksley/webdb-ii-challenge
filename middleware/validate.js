const db = require('../utils/db')

const validateCarId = () => async (req, res, next) => {
	try {
        const car = await db("cars").where("id", req.params.id).first()
        
        if (car) {
        next()
		} else {
            res.status(404)
                .json({ message: "Item not found" })
		}
	} catch (err) {
		next(err)
	}
}

const validateCar = () => async (req, res, next) => {
    try {
        const car = await req.body
        
        if(!car) {
            res.status(400).json({ errorMessage: "Missing required data."})

        } else if (!car.VIN) {
            res.status(400).json({ errorMessage: "Missing required data - VIN"})

        } else if (!car.Make) {
            res.status(400).json({ errorMessage: "Missing required data - Make"})

        } else if (!car.Model) {
            res.status(400).json({ errorMessage: "Missing required data - Model"})

        } else if (!car.Mileage) {
            res.status(400).json({ errorMessage: "Missing required data - Mileage"})
        }
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    validateCarId,
    validateCar,
}
