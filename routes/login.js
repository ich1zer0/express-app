var express = require('express');
var router = express.Router();

router.get('/', (_, res) => {
  res.render('login');
});

module.exports = router;
