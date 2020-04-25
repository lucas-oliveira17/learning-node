const request = require('supertest')
const app = require('../src/server')

describe('user api tests', () => {
    test('post user', async () => {
        const response = await request(app).get('/users').send();

        expect(response.status).toBe(200);
    })
});