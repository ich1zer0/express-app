const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.render('layout/auth', {
    title: 'Login',
    template: '../login',
  });
});

module.exports = router;
