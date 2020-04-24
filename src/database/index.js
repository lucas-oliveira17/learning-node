const dbConfig = require('../config/database')
const { Sequelize } = require('sequelize');
require('dotenv').config()

const User = require('../model/User')
const Car = require('../model/Car')

const connection = new Sequelize(dbConfig)

const DBConnect = async () => {
    try {
      await connection.authenticate();
      console.log('Connection with database has been established successfully.');
    } catch (error) {
      throw new Error(error)
    }
  }
  
DBConnect();

User.init(connection)
Car.init(connection)
Car.associate(connection.models)
User.associate(connection.models)

module.exports = connection