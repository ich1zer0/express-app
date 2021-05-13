const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.render('layout/default', {
    title: 'Dashboard',
    template: '../dashboard',
  });
});

module.exports = router;
