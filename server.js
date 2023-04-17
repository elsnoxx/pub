const http = require('node:http');
var os = require('os');

const hostname = '127.0.0.1';
const port = 3000;




const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("in seconds " + os.uptime() + '\n' + os.totalmem()/1000000000 + '\n' + os.freemem()/1000000000 + '\n' + os.loadavg() + '\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
