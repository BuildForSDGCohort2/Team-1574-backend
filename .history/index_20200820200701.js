const http = require('http');
const app = require('./app');

app.set('port', 3001);
const server = http.createServer();

server.listen(80);