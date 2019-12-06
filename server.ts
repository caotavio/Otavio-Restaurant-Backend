/*import * as jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'
import { handleAuthentication } from './auth'
import { handleAuthorization } from './authz'

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

//Login middleware
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)

// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

https.createServer(options, server).listen( process.env.PORT || 3001, () => {
  console.log('JSON Server is running on https://localhost:3001')
})
*/
var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);
server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log('JSON Server is running')
});