const { Router } = require('express');

const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');
const IncidentController = require('./controllers/IncidentController');

const authMiddleware = require('./middlewares/auth');

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/sessions', SessionController.store);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', authMiddleware, IncidentController.store);

routes.delete('/incidents/:id', authMiddleware, IncidentController.delete);

routes.get('/ongs/:id/incidents', authMiddleware, IncidentController.index);

module.exports = routes;
