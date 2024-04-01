const http = require('http');
const assert = require('assert');

describe('Server', () => {
  it('should return "connected" when a request is made', (done) => {
    const hostname = '172.0.0.1';
    const port = 3000;

    const requestListener = function(req, res) {
      res.setHeader('Content-Type', 'text/plain');
      console.log('connected');
      res.end('connected');
    };

    const server = http.createServer(requestListener);

    server.listen(port, hostname, () => {
      http.get(`http://${hostname}:${port}`, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          assert.strictEqual(data, 'connected');
          server.close();
          done();
        });
      });
    });
  });
});