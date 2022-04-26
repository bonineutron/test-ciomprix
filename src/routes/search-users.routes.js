import { Router } from 'express';
import { tokenValidation } from '../middlewares/token-validation';
import * as searchUsersController from '../controllers/search-users.controller';

const router = Router();

router.use((req, res, next) => {
   res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, x-access-token');
   next();
});

router.get('/', tokenValidation, searchUsersController.getUsers);

export default router;
