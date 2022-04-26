import { createRoles, createAdmin } from './lib/initial-setup';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import pkg from '../package.json';
import authRoutes from './routes/auth.routes';
import searchUsersRoutes from './routes/search-users.routes';

const app = express();
const corsOptions = {
   origin: '*', // all domains
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// settings
app.set('port', 3001);
app.set('pkg', pkg);
app.set('json spaces', 2);
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// initial setup
createRoles();
createAdmin();

// initial route
app.get('/', (req, res) => {
   res.json({
      message: 'Wellcome to my apirest',
      name: app.get('pkg').name,
      version: app.get('pkg').version,
      description: app.get('pkg').description,
      author: app.get('pkg').author
   });
});

// routes
app.use('/api/auth', authRoutes);
app.use('/api/search-users', searchUsersRoutes);

export default app;
