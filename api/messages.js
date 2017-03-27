var router = require('express').Router()
var axios = require('../request')
var qs = require('qs')
/* 获取留言列表 */
router.post('/messages', function (req, res, next) {
  axios.request({url:'/api/anon/messages', data:qs.stringify(req.body), method:'post'}).then(function({ data }) {
    res.json(data)
  });
})

router.get('/messages', function (req, res, next) {
  console.log(req);
  axios.request({url:`/api/anon/messages?${qs.stringify(req.query)}`}).then(function({ data }) {
    res.json(data)
  });
})

module.exports = router
