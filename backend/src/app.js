const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');

require('express-async-errors');

const routes = require('./routes');
const globalExceptionHandler = require('./middlewares/globalErrorHandler');

class App {
  constructor() {
    this.server = express();
    this.midlewares();
    this.routes();
    this.exceptions();
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

  exceptions() {
    this.server.use(globalExceptionHandler);
  }
}

module.exports = new App();
