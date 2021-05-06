const express = require('express');
const router = express.Router();

router.use((_, res) => {
  res.status(404).render('./not-found');
});

module.exports = router;
