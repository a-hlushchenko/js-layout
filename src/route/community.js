const express = require('express')
const router = express.Router()
router.get('/community', function (req, res) {
  res.render('community', {
    name: 'community',
    component: [],
    title: 'community',
    data: {},
  })
})

module.exports = router
