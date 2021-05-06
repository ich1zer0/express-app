const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.render('register');
});

module.exports = router;
