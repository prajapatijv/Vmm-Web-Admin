const express = require('express')
const delay = require('express-delay')
const { port = 3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const users = require('./data/users.json')
const items = require('./data/items.json')
const documenttypes = require('./data/documenttypes.json')
const eventtypes = require('./data/eventtypes.json')
const areas = require('./data/areas.json')
const documents = require('./data/documents.json')
const TOKEN_KEY = 'jwtsecret'

//Server setup
const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const jwtVerify = (req, res, next) => {

    if (req.url.endsWith("authenticate") || req.method === "OPTIONS") {
        next()
        return
    }

    const authorizationHeader = req.headers.authorization || ""
    if (authorizationHeader.startsWith('Bearer')) {
        const token = authorizationHeader.split(" ")[1]
        jwt.verify(token, TOKEN_KEY, (err, payload) => {
            if (payload) {
                req.user = payload
                next()
            }
            else {
                if (err) {
                    res.status(400).json("Bad request: Auth failed")
                }
            }
        })
    }
    else {
        res.status(400).json("Bad request: Auth failed")
    }
}

const app = express()
    .use(jwtVerify)
    .use(logger)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 4000))
    .use(cors())
    .use('/', express.static('./dist/img'));

//Wildcards
app.post('/api/authenticate', (req, res) => {
    console.log(req.body)
    const authToken = generateToken(req)
    res.status(200).json({ "userName": req.body.userName, "authToken": authToken })
})
app.post('/api/*', (req, res) => { console.log(req.body); res.status(200).json(req.body) })
app.delete('/api/*/:id', (req, res) => res.status(200).json({}))

//Gets
app.get('/api/users', (req, res) => { var response = {}; response.users = users; res.status(200).json(response) })
app.get('/api/items', (req, res) => { var response = {}; response.items = items; res.status(200).json(response) })
app.get('/api/documenttypes', (req, res) => { var response = {}; response.documenttypes = documenttypes; res.status(200).json(response) })
app.get('/api/eventtypes', (req, res) => { var response = {}; response.eventtypes = eventtypes; res.status(200).json(response) })
app.get('/api/areas', (req, res) => { var response = {}; response.areas = areas; res.status(200).json(response) })
app.get('/api/documents', (req, res) => { var response = {}; response.documents = documents; response.documenttypes = documenttypes; res.status(200).json(response) })

const generateToken = (req) => {
    const user = users.find(u => u.userName === req.body.userName)
    if (user && user.password === req.body.password) {
        var payload = {
            userName: user.userName,
            role: 'admin'
        }

        return token = jwt.sign(payload, TOKEN_KEY, {
            expiresIn: 60 * 60 * 24 //24hrs
        })
    }
    else {
        return null
    }
}

app.listen(port, () => console.log('App server running on port ' + port + ' with random delay'))