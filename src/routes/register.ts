import express from 'express';
const router = express.Router();

router.get('/', (_, res) => {
  res.render('../../views/register');
});

export default router;
