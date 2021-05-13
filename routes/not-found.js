const express = require('express');
const router = express.Router();

router.use((_, res) => {
  res.status(404).render('layout/default', {
    title: '404 NotFound',
    template: '../not-found',
  });
});

module.exports = router;
