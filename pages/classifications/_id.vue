<script>
import NavPanel from '~/components/NavPanel.vue'
import ArticleList from '~/components/article/ArticleList.vue'
import axios from '~/plugins/axios'
import qs from 'qs';
import Classifications from '~/components/Classifications'
import LatelyComent from '~/components/LatelyComent'
import Message from '~/components/Message'
export default {
  async asyncData({ params, error, query }) {
    const param = {
      classification: params.id,
      ...query
    }
    const articles = await axios.get(`/api/articles?${qs.stringify(param)}`)
    const classifications = await axios.get('/api/classifications')
    const comments = await axios.get(`/api/comments`)
    const messages = await axios.get(`/api/messages`)
    if (articles.data.httpCode === 200 && classifications.data.httpCode === 200 && comments.data.httpCode === 200 && messages.data.httpCode === 200) {
      if (articles.data.data) {
        return { page: articles.data, classificationId: params.id, classifications: classifications.data.data, classification: classifications.data.data.filter((c) => c.id_ === params.id)[0], comments: comments.data.data, messages: messages.data.data }
      } else {
        error({ statusCode: 404, message: '糟糕！获取文章列表数据失败' })
      }
    } else {
      if (articles.data.httpCode !== 200) {
        error({ statusCode: articles.data.httpCode, message: articles.data.msg })
      } else {
        error({ statusCode: classifications.data.httpCode, message: classifications.data.msg })
      }
    }
  },
  components: {
    NavPanel,
    ArticleList,
    Classifications,
    LatelyComent,
    Message
  },
}
</script>
<template>
  <section class="my-container">
    <NavPanel :classification="classification" />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <ArticleList :page="page" :classificationId="classificationId" />
        </div>
        <div class="col-md-4" style="margin-top:25px;">
          <Classifications :classifications="classifications" :classification="classification" />
          <Message :messages="messages" />
          <LatelyComent :comments="comments" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.my-container {
  width: 100%;
  height: 100%;
}
</style>
