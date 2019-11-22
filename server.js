const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

const port = process.env.PORT || 8080;
app.set(port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server running');
});
