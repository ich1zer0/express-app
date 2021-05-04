var express = require('express');
var router = express.Router();

router.get('/', (_, res) => {
  res.render('register');
});

module.exports = router;
