const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('EDITOR ROUTER')
})


module.exports = router