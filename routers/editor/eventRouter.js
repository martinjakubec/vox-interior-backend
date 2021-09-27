const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('EVENT ROUTER')
})


module.exports = router