import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import foodRoutes from './routes/foodRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/foods', foodRoutes);
  }
}

export default new App().app;
