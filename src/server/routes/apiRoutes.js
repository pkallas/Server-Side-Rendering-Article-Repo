const router = require('express').Router();

router.get('/localAPIButton', (req, res) => {
  res.json('Thanks for pressing the cool button!');
});

module.exports = router;
