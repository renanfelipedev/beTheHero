const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    this.server.use(errors());
  }
}

module.exports = new App().server;
