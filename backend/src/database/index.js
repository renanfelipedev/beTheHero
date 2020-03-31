const knex = require('knex');
const configuration = require('../../knexfile');

const env =
  process.env.NODE_ENV === 'test'
    ? configuration.test
    : configuration.development;

const database = knex(env);

module.exports = database;
