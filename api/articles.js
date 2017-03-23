var router = require('express').Router()
var request = require('../request')

/* 获取文章列表 */
router.get('/articles', function (req, res, next) {
  request.get('/api/anon/articles').then(function({ data }) {
    res.json(data)
  });
})

/* 获取文章详情 */
router.get('/articles/:id', function (req, res, next) {
  request.get(`/api/anon/articles/${req.params.id}`).then(function( { data }) {
    res.json(data)
  });
})

module.exports = router
