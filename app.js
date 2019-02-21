const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');

const db = require('./db');

const UserController = require('./user/user_controller');
app.use('/users', UserController);

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.get('/', function(request, response) {
  response.status(200).send('{"message":"hello world"}');
});

app.use('/', router);




module.exports = app;

//var http = require("http");
//
//http.createServer(function(request, response) {
//  response.writeHead(200, {'Content-Type': 'text/plain'});
//  response.end('Hello World\n');
//}).listen(8081);
//
//console.log('Server running at http://127.0.0.1:8081/');
