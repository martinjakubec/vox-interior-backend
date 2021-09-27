const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the subdomain')
})

module.exports = router