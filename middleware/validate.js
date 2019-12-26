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
	} catch (error) {
		next(error)
	}
}

const validateCar = () => async (req, res, next) => {
    try {
        const car = await req.body
        
        //We want the validation to fail if these individual pieces are missing
        if(!car.vin || !car.make || !car.model || !car.mileage) {
            res
                .status(400)
                .json({ errorMessage: "Missing required data"})
        } else {
            next()
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
