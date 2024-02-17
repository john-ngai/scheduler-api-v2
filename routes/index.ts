/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import express from 'express'

const indexRouter = express.Router()

indexRouter.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

export { indexRouter }
