var express = require('express')
var auth = require('express-basic-auth')

var app = express()

var users = {}

users[process.env.USERNAME] = process.env.PASSWORD

app.use(auth({ users: users }))

app.use(express.static(__dirname))

app.listen(3000)
