/* eslint-disable */
const express = require('express')
const delay = require('express-delay')
const { port = 3333 } = require('minimist')(process.argv)
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
//const fileUpload = require('express-fileupload')

const users = require('./data/users.json')
const items = require('./data/items.json')
const documenttypes = require('./data/documenttypes.json')
const eventtypes = require('./data/eventtypes.json')
const areas = require('./data/areas.json')
const documents = require('./data/documents.json')
const events = require('./data/events.json')
const popups = require('./data/popup.json')
const queries = require('./data/queries.json')
const joinsamitis = require('./data/joinsamiti.json')
const samititypes = require('./data/samititypes.json')
const states = require('./data/states.json')
const districts = require('./data/districts.json')
const taluka = require('./data/taluka.json')

const TOKEN_KEY = 'jwtsecret'

//Server setup
const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const jwtVerify = (req, res, next) => {
    if (req.url.endsWith("authenticate") || req.url.endsWith("file")  || req.method === "OPTIONS") {
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
    // .use(jwtVerify)
    .use(logger)
    //.use(fileUpload)
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json()) // for parsing application/json    
    .use(delay(1000, 2000))
    .use(cors())
    .use('/', express.static('./dist/img'));

//Wildcards
app.post('/api/authenticate', (req, res) => {
    console.log(req.body)
    const authToken = generateToken(req)
    res.status(200).json({ "userName": req.body.userName, "authToken": authToken })
})

//Posts
app.post('/api/users', (req, res) => { var response = {}; response.users = users; res.status(200).json(response) })
app.post('/api/items', (req, res) => { var response = {}; response.items = items; res.status(200).json(response) })
app.post('/api/documenttypes', (req, res) => { var response = {}; response.documenttypes = documenttypes; res.status(200).json(response) })
app.post('/api/eventtypes', (req, res) => { var response = {}; response.eventtypes = eventtypes; res.status(200).json(response) })
app.post('/api/areas', (req, res) => { var response = {}; response.areas = areas; res.status(200).json(response) })
app.post('/api/documents', (req, res) => { var response = {}; response.documents = documents; res.status(200).json(response) })
app.post('/api/events', (req, res) => { var response = {}; response.events = events; res.status(200).json(response) })
app.post('/api/popups', (req, res) => { var response = {}; response.popups = popups; res.status(200).json(response) })
app.post('/api/states', (req, res) => { var response = {}; response.states = states; res.status(200).json(response) })
app.post('/api/districts', (req, res) => { var response = {}; response.districts = districts; res.status(200).json(response) })
app.post('/api/taluka', (req, res) => { var response = {}; response.taluka = taluka; res.status(200).json(response) })

app.delete('/api/*/:id', (req, res) => res.status(200).json({}))

//Gets
app.get('/api/users', (req, res) => { var response = {}; response.users = users; res.status(200).json(response) })
app.get('/api/items', (req, res) => { var response = {}; response.items = items; res.status(200).json(response) })
app.get('/api/documenttypes', (req, res) => { var response = {}; response.documenttypes = documenttypes; res.status(200).json(response) })
app.get('/api/eventtypes', (req, res) => { var response = {}; response.eventtypes = eventtypes; res.status(200).json(response) })
app.get('/api/areas', (req, res) => { var response = {}; response.areas = areas; res.status(200).json(response) })
app.get('/api/documents', (req, res) => { var response = {}; response.documents = documents; response.documenttypes = documenttypes; res.status(200).json(response) })
app.get('/api/events', (req, res) => { var response = {}; 
    response.events = events; 
    response.eventtypes = eventtypes; 
    response.areas = areas; 
    response.states = states, 
    response.districts = districts, 
    response.taluka = taluka, 
    res.status(200).json(response) })
app.get('/api/popups', (req, res) => { var response = {}; response.popups = popups; res.status(200).json(response) })
app.get('/api/queries', (req, res) => { var response = {}; response.queries = queries; res.status(200).json(response) })
app.get('/api/joinsamitis', (req, res) => { var response = {}; response.joinsamitis = joinsamitis; response.samititypes = samititypes; res.status(200).json(response) })
app.get('/api/states', (req, res) => { var response = {}; response.states = states; res.status(200).json(response) })
app.get('/api/districts', (req, res) => { var response = {}; response.districts = districts; res.status(200).json(response) })
app.get('/api/taluka', (req, res) => { var response = {}; response.taluka = taluka; res.status(200).json(response) })

//filepond endpoints
app.post('/api/file', (req, res) => res.status(200).json(new Date().toUTCString()))

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
