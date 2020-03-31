const { Router } = require('express');

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

const {
  newOngValidator,
  newIncidentValidator,
  requiredIDValidator,
  pageIsNumberValidator,
} = require('./validators');

const authMiddleware = require('./middlewares/auth');

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', newOngValidator, OngController.store);

routes.post('/sessions', SessionController.store);

// Return all incidents on database
routes.get('/incidents', pageIsNumberValidator, IncidentController.index);

routes.post(
  '/incidents',
  [newIncidentValidator, authMiddleware],
  IncidentController.store
);

routes.delete(
  '/incidents/:id',
  [requiredIDValidator, authMiddleware],
  IncidentController.delete
);

// Return incidents based on ONG
routes.get(
  '/ongs/:id/incidents',
  [requiredIDValidator, authMiddleware],
  IncidentController.index
);

module.exports = routes;
