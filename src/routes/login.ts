import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  res.render('../../views/login');
});

export default router;
