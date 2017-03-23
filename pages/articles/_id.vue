<template>
  <section class="container my-article-panel">
    <article-panel :article="article"/>
    <comment-input />
    <comment-panel />
  </section>
</template>
<script>
import ArticlePanel from '~components/article/ArticlePanel'
import CommentPanel from '~components/comment/CommentPanel'
import CommentInput from '~components/comment/CommentInput'
import axios from '~plugins/axios'
import utils from '../../utils'
export default {
  async data ({ params, error }) {
    if(params.id) {
      const { data } = await axios.get(`/api/articles/${params.id}`)
      if(data.httpCode === 200) {
        const article = data.data
        if(article) {
          article.content = utils.markdown(article.content)
          return { article: article }
        } else {
          error({ statusCode: 404, message: '糟糕！没有找到这篇文章信息' })
        }
      } else {
        error({ statusCode: data.httpCode, message: data.msg })
      }
    } else {
      error({ statusCode: 500, message: '未传入文章编码，请检查地址输入是否有误' })
    }
  },
  components: {
    ArticlePanel,
    CommentPanel,
    CommentInput
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>

<style scoped>
.my-article-panel {
  background-color: #fff;
  margin-top:30px;
  max-width:800px;
  margin-bottom:30px;
}
.my-article {
}
</style>
