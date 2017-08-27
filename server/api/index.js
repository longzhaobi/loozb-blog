var router = require('express').Router()

import article from './articles';
import classification from './classifications';
import comment from './comments';
import message from './messages';

// 文章相关路由
router.use(article)
router.use(classification)
router.use(comment)
router.use(message)
export default router;
