var path = require('path')
var express = require('express')
var auth = require('express-basic-auth')

var app = express()

var users = {}

users[process.env.USERNAME] = process.env.PASSWORD

app.use(auth({ users: users, challenge: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(process.env.PORT || 3000)
