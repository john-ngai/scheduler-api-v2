/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import express from 'express'
import { query } from '../database'

const router = express.Router()

const data = [
  {
    id: '892af969-b290-4ea4-b6a3-1a4570a49dfe',
    startDateTime: '2024-02-14T14:00:00',
    endDateTime: '2024-02-14T15:00:00',
  },
]

router.get('/', (req, res) => {
  res.json(data)
})

router.get('/users', async (req, res) => {
  try {
    const { rows } = await query(`
    SELECT * FROM users;
    `)
    res.json(rows)
  } catch {}
})

const scheduleRouter = router

export { scheduleRouter }
