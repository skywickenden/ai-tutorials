// Simple server adapted from this tutorial. (changed 'lib' to 'src')
// https://github.com/babel/example-node-server
import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
  if (req.url === '/') req.url = '/index.html';
    console.log(req.url);
  fs.access('src/pages' + req.url, (err) => {
    if (!err) {
      if (req.url.substr(req.url.length - 3) === '.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
      } else if (req.url.substr(req.url.length - 5) === '.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});
      }
      fs.createReadStream('src/pages' + req.url).pipe(res);

    } else {
      console.log('no access!', err);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
    }
  });

}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
