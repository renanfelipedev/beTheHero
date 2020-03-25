import knex from 'knex';
import configuration from '../../knexfile';

const database = knex(configuration.development);

export default database;
