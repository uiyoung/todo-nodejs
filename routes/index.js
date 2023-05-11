const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('todo');
});

module.exports = router;
