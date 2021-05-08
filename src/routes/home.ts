import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  res.render('../../views/home');
});

export default router;
