const express = require('express')
const routes = express.Router()
const UserController = require('./controller/UserController')
const CarController = require('./controller/CarController')
const { verifyJWT, login, logout } = require('./auth/auth.js')

routes.get('/', (req, res) => {
    return res.json('Hello World! 6')
})

routes.post('/login', (req, res) => {
  login(req, res)
})

routes.get('/logout', (req, res) => {
  logout(req, res)
});

routes.get('/users', verifyJWT, (req, res) => {
  UserController.findAll(req, res)
})

routes.post('/users', (req, res) => {
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