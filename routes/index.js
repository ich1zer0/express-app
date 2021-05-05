const router = require('express').Router();

const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');
const notFoundRouter = require('./not-found');

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/', homeRouter);
router.use(notFoundRouter);

module.exports = router;
