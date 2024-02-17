/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

const server = require('../app.js')
const supertest = require('supertest')
const req = supertest(server)

// Command: npm test
describe('Schedule endpoints', () => {
  it('GET /schedule', async () => {
    const res = await req.get('/schedule')
    expect(res.status).toEqual(200)
    expect(res.type).toEqual('application/json')
  })
})
