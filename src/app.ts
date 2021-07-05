process.env.NODE_ENV = process.env.NODE_ENV || 'local';
process.env.APP_ENV = process.env.APP_ENV || 'local';

import dotenv from 'dotenv';
dotenv.config({
  path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});


import express from 'express';
import { loadControllers } from 'awilix-express';
import loadContainer from './container';



console.log(process.env.APP_FOO);


const app: express.Application = express();

app.use(express.json());

loadContainer(app);

app.use(loadControllers('controllers/*.ts', { cwd: __dirname }));

export { app };
