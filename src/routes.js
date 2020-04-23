const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')
const CarController = require('./controller/CarController')
const { verifyJWT, login, logout } = require('./auth/auth.js')

routes.get('/', (req, res) => {
  const { Sequelize } = require('sequelize');

  const sequelize = new Sequelize('carrosnode', 'lucas', '123', {
      host: 'lucasviana.brazilsouth.azurecontainer.io',
      dialect: 'postgres',
      define: {
          timestamps: true,
          underscored: true,
      },
  })

  const DBConnect = async () => {
    try {
      await sequelize.authenticate();
      return 'Banco conectado!';
    } catch (error) {
      return 'Conexão com o banco sem sucesso!' + error
    }
  }

  const ret = DBConnect().then(ret => res.json(ret))

  return ret
})

routes.post('/login', (req, res) => {
  login(req, res)
})

routes.get('/logout', (req, res) => {
  logout(req, res)
});

routes.get('/users', (req, res) => {
  UserController.findAll(req, res)
})

routes.post('/users', verifyJWT, (req, res) => {
  UserController.create(req, res)
})

routes.get('/cars', verifyJWT, (req, res) => {
  CarController.findAll(req, res)
})

routes.post('/users/:user_id/cars', verifyJWT, (req, res) => {
  CarController.create(req, res)
})

routes.delete('/cars/:car_id', verifyJWT, (req, res) => {
  CarController.delete(req, res)
})

module.exports = routes