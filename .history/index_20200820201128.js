const http = require('http');
const app = require('./app');

app.set('port', 3000);
const server = http.createServer();

server.listen(8080,()=>console.log(4));