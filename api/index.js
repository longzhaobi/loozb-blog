var router = require('express').Router()

// 文章相关路由
router.use(require('./articles'))
router.use(require('./classifications'))
module.exports = router
