const http = require('http');
const CleanUp = require('./CleanUp');

const server = http.createServer(CleanUp);

server.listen(3000); 