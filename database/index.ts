/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import { Pool } from 'pg'

const pool = new Pool({
  user: 'me',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'api',
})

export const query = (queryText: string, values?: any[]) =>
  pool.query(queryText, values)
