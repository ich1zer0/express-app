const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.render('layout/default', {
    title: 'Homes',
    template: '../home',
  });
});

module.exports = router;
