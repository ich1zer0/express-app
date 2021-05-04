var express = require('express');
var router = express.Router();

router.use((_, res) => {
  res.status(404).render('./not-found');
});

module.exports = router;
