const http = require('http');
const app = require('./app');

app.set('port', 3000);
const server = http.createServer();

server.listen(3000,()=>console.log(4));