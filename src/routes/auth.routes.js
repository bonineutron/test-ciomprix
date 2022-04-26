import { Router } from 'express';
import { verifyData } from '../middlewares/verify-data-signup';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.use((req, res, next) => {
   res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});

router.post('/signin', authController.signin);

router.post('/signup', verifyData, authController.signup);

export default router;
