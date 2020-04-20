const Car = require('../model/Car')
const User = require('../model/User')

module.exports = {
    async findAll(req, res) {
        const cars = await Car.findAll({
            include: { association: 'user' }
        });

        return res.json(cars)
    },
    async create(req, res) {
        const { user_id } = req.params;
        const { model, brand, year } = req.body;

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found!' })
        }

        const car = await Car.create({
            user_id, model, brand, year
        })

        return res.json(car)
    },
    async delete(req, res) {
        const { car_id } = req.params;

        const car = await Car.findByPk(car_id)

        if (!car) {
            return res.status(400).json({ error: 'Car not found!' })
        }

        await Car.destroy({
            where: { id: car_id }
        })

        return res.json()
    }
}