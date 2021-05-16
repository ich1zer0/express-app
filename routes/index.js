const router = require('express').Router();

const apiQuizRouter = require('./api/quiz');
const dashboardRouter = require('./dashboard');
const loginRouter = require('./login');
const registerRouter = require('./register');
const quizRouter = require('./quiz');
const notFoundRouter = require('./not-found');

router.use('/api/quiz', apiQuizRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/quiz', quizRouter);
router.use('/', dashboardRouter);
router.use(notFoundRouter);

module.exports = router;
