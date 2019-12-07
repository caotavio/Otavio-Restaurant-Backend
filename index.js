var auth_1 = require("./auth");
var authz_1 = require("./authz");
const allowCors = require('./cors')

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');

var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);

server.use(middlewares);

//Login middleware
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);

server.use(router);

server.use(allowCors);

server.listen(port, function () {
    console.log('JSON Server is running')
});