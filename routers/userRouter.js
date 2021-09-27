const User = require('../schemas/userSchema');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('USER ROUTER')
})

module.exports = router