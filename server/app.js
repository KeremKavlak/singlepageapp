const express = require('express')
const app = express()
const port = 3000
const Auth = require('./Auth')

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.post('/login', Auth.login)
app.post('/register', Auth.register)
app.post('/poststatus', Auth.poststatus)

app.get('/user', Auth.user)
app.get('/getstatus', Auth.getstatus)
app.get('/searchstatus', Auth.searchstatus)

app.listen(port)