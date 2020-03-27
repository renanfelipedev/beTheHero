import { Router } from 'express';

import OngController from './controllers/OngController';
import SessionController from './controllers/SessionController';
import IncidentController from './controllers/IncidentController';

import auth from './middlewares/auth';

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/sessions', SessionController.store);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', auth, IncidentController.store);
routes.delete('/incidents/:id', auth, IncidentController.delete);
routes.get('/ongs/:id/incidents', auth, IncidentController.index);

export default routes;
