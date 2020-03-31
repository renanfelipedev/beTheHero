require('dotenv/config');
const { createServer } = require('http');
const App = require('./app');

class Server {
  constructor() {
    this.webserver = createServer(App);
    this.port = process.env.PORT || 3333;
  }

  init() {
    this.webserver.listen(this.port);
  }
}

new Server().init();
