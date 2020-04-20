const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../model/User')
const Car = require('../model/Car')

const connection = new Sequelize(dbConfig)

User.init(connection)
Car.init(connection)

Car.associate(connection.models)
User.associate(connection.models)

module.exports = connection