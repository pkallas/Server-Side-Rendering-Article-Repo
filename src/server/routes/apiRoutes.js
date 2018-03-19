const router = require('express').Router();

router.get('/coolButtonPressed', (req, res) => {
  res.json('Thanks for pressing the cool button!');
});

module.exports = router;
