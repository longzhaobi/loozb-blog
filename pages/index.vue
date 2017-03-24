<script>
  import NavPanel from '~components/NavPanel.vue'
  import ArticleList from '~components/article/ArticleList.vue'
  import axios from '~plugins/axios'
  export default {
    async data ({ params, error }) {
      const { data } = await axios.get('/api/articles')
      if(data.httpCode === 200) {
        if(data) {
          return { page: data }
        } else {
          error({ statusCode: 404, message: '糟糕！获取文章列表数据失败' })
        }
      } else {
        error({ statusCode: data.httpCode, message: data.msg })
      }
    },
    mounted () {
    },
    components: {
      NavPanel,
      ArticleList
    },
  }
</script>
<template>
  <section class="my-container">
    <nav-panel />
    <article-list :page = "page"/>
  </section>
</template>

<style scoped>
  .my-container {
    width:100%;
    height:100%;
  }
</style>
