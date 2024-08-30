const http = require('http');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  const text = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.writeHead(200);
  res.end(text);
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
