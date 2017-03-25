var router = require('express').Router()
var request = require('../request')

/* 获取文章列表 */
router.get('/classifications', function (req, res, next) {
  request.get('/api/anon/all/classifications').then(function({ data }) {
    res.json(data)
  });
})

module.exports = router
