const dbConfig = require('../src/config/database')
const { Sequelize } = require('sequelize');
const connection = new Sequelize(dbConfig)

describe('user entity tests', () => {
    beforeAll(() => {
        const User = require('../src/model/User')
        const Car = require('../src/model/Car')

        User.init(connection)
        Car.init(connection)
        User.associate(connection.models)
    })

    afterAll(() => {
        connection.close()
    })

    test('post user', async () => {
        const objToCreate = { 
            name: "Joe",
            email: "joe@joe",
            phone: "444" 
        }

        const { name, email, phone } = await User.create(objToCreate);

        expect(objToCreate).toMatchObject({ name, email, phone })
    })
});