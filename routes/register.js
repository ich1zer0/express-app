const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.render('layout/auth', {
    title: 'Register',
    template: '../register',
  });
});

module.exports = router;
