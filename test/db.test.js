const dbConfig = require('../src/config/database')
const { Sequelize } = require('sequelize');
const connection = new Sequelize(dbConfig)

const User = require('../src/model/User')
const Car = require('../src/model/Car')

describe('user model tests', () => {
    beforeAll(() => {
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

        const user = await User.create(objToCreate);

        const { name, email, phone } = user

        expect(objToCreate).toMatchObject({ name, email, phone })

        await user.destroy();
    })
});