var router = require('express').Router()
var request = require('../request')
var qs = require('qs')
/* 获取文章列表 */
router.get('/articles', function (req, res, next) {
  const params = {};

  const {current, classification, keyword} = req.query;
  if(current) {
    params.current = current;
  }
  if(classification) {
    params.classification = classification;
  }
  if(keyword) {
    params.keyword = keyword
  }
  request.get(`/api/anon/articles?${qs.stringify(params)}`).then(function({ data }) {
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
