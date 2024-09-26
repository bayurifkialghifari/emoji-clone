const express = require('express')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const indexRouter = require('./routes')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve('public')))

app.use('/', indexRouter)

module.exports = app
