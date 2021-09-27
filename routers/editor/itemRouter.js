const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('ITEM ROUTER')
})


module.exports = router