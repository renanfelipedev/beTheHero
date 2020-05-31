require('dotenv/config');
const { createServer } = require('http');
const { server } = require('./app');

class Server {
  constructor() {
    this.webserver = createServer(server);
    this.port = process.env.PORT || 3333;
  }

  init() {
    this.webserver.listen(this.port);
  }
}

new Server().init();
