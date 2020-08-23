const http = require('http');
const app = require('./app');

app.set('port', 3000);
const server = http.createServer();

server.listen(80,()=>console.log(4));