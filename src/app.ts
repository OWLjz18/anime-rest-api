import config from 'config';
import express, { Application } from 'express'; 
import animesRoutes from './routes/animes.routes';

const app: Application = express();
const port: number = config.get<number>('server.port');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', animesRoutes);

app.set('port', port);

export default app;
