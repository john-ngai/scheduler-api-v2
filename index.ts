/**
 * Copyright (c) 2024 John Ngai
 * All Rights Reserved
 */

import cookieParser from 'cookie-parser'
import express, { Application } from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import path from 'path'
import { indexRouter, scheduleRouter } from './routes'

// const usersRouter = require('./routes/users')

const app: Application = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/schedule', scheduleRouter)
// app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use((_, __, next) => {
  next(createError(404))
})

const port = 3001
app.listen(port, () =>
  console.log(
    `Schedule API v2 server is listening at http://localhost:${port}/`
  )
)

export default app
