const { Model, DataTypes } = require('sequelize')

class Car extends Model {
    static init(sequelize) {
        super.init({
            model: DataTypes.STRING,
            brand: DataTypes.STRING,
            year: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Car