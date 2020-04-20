const User = require('../model/User')

module.exports = {
    async findAll(req, res) {
        const users = await User.findAll({
            include: { association: 'cars' }
        });

        return res.json(users)
    },
    async create(req, res) {
        const { name, email, phone } = req.body;

        const user = await User.create({ name, email, phone })

        return res.json(user)
    }
}