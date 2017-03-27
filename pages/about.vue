<template>
  <div>
    <NavPanel />
    <section class="container my-article-panel">
      <ArticlePanel :article="article"/>
      <CommentInput :articleId="articleId"/>
      <CommentPanel :comments="comments" :current="current" :articleId="articleId"/>
    </section>
  </div>
</template>
<script>
import NavPanel from '~components/NavPanel.vue'
import ArticlePanel from '~components/article/ArticlePanel'
import CommentPanel from '~components/comment/CommentPanel'
import CommentInput from '~components/comment/CommentInput'
import axios from '~plugins/axios'
import utils from '../utils'
export default {
  async data ({ params, error }) {
    const { data } = await axios.get(`/api/articles/846388720188416000`)
    if(data.httpCode === 200) {
      const article = data.data
      if(article) {
        article.content = utils.markdown(article.content)
        return { article: article, articleId: article.id_}
      } else {
        error({ statusCode: 404, message: '糟糕！没有找到这篇文章信息' })
      }
    } else {
      error({ statusCode: data.httpCode, message: data.msg })
    }
  },
  async fetch ({ store, params }) {
    const { data } = await axios.get(`/api/comments?articleId=846388720188416000`)
    store.commit('queryCommentSuccess', {comments: data.data, current: data.current, size: data.size, total: data.total})
  },
  components: {
    ArticlePanel,
    CommentPanel,
    CommentInput,
    NavPanel
  },
  head () {
    return {
      title: this.article.title
    }
  },
  computed: {
    comments () {
      return this.$store.state.comments
    },
    current () {
      return this.$store.state.commentCurrent
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
