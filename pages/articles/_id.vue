<template>
  <section class="container my-article-panel">
    <ArticlePanel :article="article" />
    <CommentInput :articleId="articleId" />
    <CommentPanel :comments="comments" :current="current" :articleId="articleId" />
  </section>
</template>
<script>
import NavPanel from '~/components/NavPanel.vue'
import ArticlePanel from '~/components/article/ArticlePanel'
import CommentPanel from '~/components/comment/CommentPanel'
import CommentInput from '~/components/comment/CommentInput'
import axios from '~/plugins/axios'
import utils from '../../utils'
export default {
  async asyncData({ params, error }) {
    if (params.id) {
      const { data } = await axios.get(`/api/articles/${params.id}`)
      if (data.httpCode === 200) {
        const article = data.data
        if (article) {
          article.content = utils.markdown(article.content)
          return { article: article, articleId: params.id }
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
  async fetch({ store, params }) {
    const { data } = await axios.get(`/api/comments?articleId=${params.id}`)
    store.commit('queryCommentSuccess', { comments: data.data, current: data.current, size: data.size, total: data.total })
  },
  components: {
    ArticlePanel,
    CommentPanel,
    CommentInput,
    NavPanel
  },
  head() {
    return {
      title: this.article.title
    }
  },
  computed: {
    comments() {
      return this.$store.state.comments
    },
    current() {
      return this.$store.state.commentCurrent
    }
  }
}
</script>

<style scoped>
.my-article-panel {
  background-color: #fff;
  margin-top: 30px;
  max-width: 800px;
  margin-bottom: 30px;
}

.my-article {}
</style>
