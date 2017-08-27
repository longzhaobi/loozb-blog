var router = require('express').Router()
var axios = require('../request')
var qs = require('qs')
/* 获取文章列表 */
router.post('/comments', function (req, res, next) {
  axios.request({url:'/anon/comments', data:qs.stringify(req.body), method:'post'}).then(function({ data }) {
    res.json(data)
  });
})

router.get('/comments', function (req, res, next) {
  axios.request({url:`/anon/comments?${qs.stringify(req.query)}`}).then(function({ data }) {
    res.json(data)
  });
})

export default router;
