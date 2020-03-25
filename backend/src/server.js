import 'dotenv/config';

import { createServer } from 'http';
import App from './app';

const server = createServer(App);

server.listen(process.env.PORT || 3333);
