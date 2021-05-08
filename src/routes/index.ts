import express from 'express';
import homeRouter from './home';
import loginRouter from './login';
import registerRouter from './register';
import notFoundRouter from './not-found';

const router = express.Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/', homeRouter);
router.use(notFoundRouter);

export default router;
