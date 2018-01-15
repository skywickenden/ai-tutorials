// Simple server adapted from this tutorial. (changed 'lib' to 'src')
// https://github.com/babel/example-node-server
import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World 5\n');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
