var router = require('express').Router()
var axios = require('../request')
var qs = require('qs')
var db = require("../db");
/* 获取留言列表 */
router.post('/messages', function (req, res, next) {
  axios.request({url:'/api/anon/messages', data:qs.stringify(req.body), method:'post'}).then(function({ data }) {
    res.json(data)
  });
})

router.get('/messages', function (req, res, next) {
  let sql = "select * from tb_message where available='1'"
  db.query(sql, [], function(error, rows, fields) {
    if (error) {
      res.json(500);
    } else {
      res.json(rows);
    }
  });
})

export default router;
