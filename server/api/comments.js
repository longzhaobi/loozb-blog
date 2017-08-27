var router = require('express').Router()
var qs = require('qs')

import comment from '../model/comment';

/* 获取文章列表 */
router.post('/comments', function (req, res, next) {
  comment.insert(req, (error, rows, fields) => {
    if(error) {
      res.json(error)
    } else {
      res.json(rows)
    }
  })
})

router.get('/comments', function (req, res, next) {
  comment.query(req, function (error, rows, fields) {
    if (error) {
      res.json(500);
    } else {
      res.json(rows);
    }
  })
})

export default router;
