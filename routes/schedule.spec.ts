/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import supertest from 'supertest'
import app from '../index'

const req = supertest(app)

// Command: npm test
describe('Schedule endpoints', () => {
  it('GET /schedule', async () => {
    const res = await req.get('/schedule')
    expect(res.status).toEqual(200)
    expect(res.type).toEqual('application/json')
  })
})
