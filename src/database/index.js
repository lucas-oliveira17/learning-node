const dbConfig = require('../config/database')
const { Sequelize } = require('sequelize');

const User = require('../model/User')
const Car = require('../model/Car')

const getEnv = nodeEnv => {
  let map = new Object();

  map['development'] = dbConfig.development
  map['test'] = dbConfig.test
  map['production'] = dbConfig.production

  return map[nodeEnv]
}

const connection = new Sequelize(getEnv(process.env.NODE_ENV))

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