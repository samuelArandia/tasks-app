import express from 'express';
import router from './routes/tasks';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions';

const specs = swaggerJSDoc(options);

const app = express();

app.set('port', process.env.PORT || 3333);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
export default app;