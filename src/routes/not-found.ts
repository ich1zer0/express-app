import express from 'express';
const router = express.Router();

router.use((_, res) => {
  res.status(404).render('../../views/not-found');
});

export default router;
