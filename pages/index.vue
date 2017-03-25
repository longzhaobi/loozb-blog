<script>
  import NavPanel from '~components/NavPanel.vue'
  import ArticleList from '~components/article/ArticleList.vue'
  import axios from '~plugins/axios'

  import Categories from '~components/Categories'
  import LatelyComent from '~components/LatelyComent'
  import Message from '~components/Message'
  export default {
    async data ({ params, error }) {
      const articles = await axios.get('/api/articles')
      const classifications = await axios.get('/api/classifications')
      console.log(classifications);
      if(articles.data.httpCode === 200 && classifications.data.httpCode === 200) {
        if(articles.data && classifications.data) {
          return { page: articles.data, classifications: classifications.data.data}
        } else {
          error({ statusCode: 404, message: '糟糕！获取文章列表数据失败' })
        }
      } else {
        if(articles.data.httpCode !== 200) {
          error({ statusCode: articles.data.httpCode, message: articles.data.msg })
        } else {
          error({ statusCode: classifications.data.httpCode, message: classifications.data.msg })
        }
      }
    },
    mounted () {
    },
    components: {
      NavPanel,
      ArticleList,
      Categories,
      LatelyComent,
      Message
    },
  }
</script>
<template>
  <section class="my-container">
    <NavPanel />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <ArticleList :page = "page"/>
        </div>
        <div class="col-md-4" style="margin-top:25px;">
          <Categories :classifications="classifications"/>
          <Message />
          <LatelyComent />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .my-container {
    width:100%;
    height:100%;
  }
</style>
