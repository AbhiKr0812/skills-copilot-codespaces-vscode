// Create web server
// Create a web server that listens on port 3000 and serves the following responses:
// The response for the /comments URL should be a JSON array of objects that have a userId, id, title, and body.
// The response for the /users URL should be a JSON array of objects that have a userId, id, title, and body.
// The response for any other URL should be a 404 status code with a JSON object that has an error message.
// Use the comments.json file in the current directory as the source for the JSON data.

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  console.log(path);

  if (path === '/comments') {
    fs.readFile('comments.json', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else if (path === '/users') {
    fs.readFile('comments.json', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});