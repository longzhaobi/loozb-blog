var router = require('express').Router()

import article from '../model/article';

// const article = new Article();

/* 获取文章列表 */
router.get('/articles', function (req, res, next) {
  article.query(req, function (error, rows, fields) {
    if (error) {
      res.json(500);
    } else {
      res.json(rows);
    }
  })
})

/* 获取文章详情 */
router.get('/articles/:id', function (req, res, next) {
  article.queryById(req, (error, rows, fields) => {
    if (error) {
      res.json(500);
    } else {
      res.json(rows);
    }
  })
})

export default router;
