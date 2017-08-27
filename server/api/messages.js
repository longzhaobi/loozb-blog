var router = require('express').Router()
var axios = require('../request')
var qs = require('qs')
/* 获取留言列表 */
router.post('/messages', function (req, res, next) {
  axios.request({url:'/anon/messages', data:qs.stringify(req.body), method:'post'}).then(function({ data }) {
    res.json(data)
  });
})

router.get('/messages', function (req, res, next) {
  axios.request({url:`/anon/messages?${qs.stringify(req.query)}`}).then(function({ data }) {
    res.json(data)
  });
})

export default router;
