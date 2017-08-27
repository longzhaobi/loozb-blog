var router = require('express').Router()
var db = require("../db");
/* 获取文章列表 */
router.get('/classifications', function (req, res, next) {
  let sql = "select * from tb_classification where available='1'"
  db.query(sql, [], function (error, rows, fields) {
    if (error) {
      res.json(500);
    } else {
      res.json(rows);
    }
  })
})

export default router;
