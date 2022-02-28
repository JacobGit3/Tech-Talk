const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('working');
});

module.exports = router;