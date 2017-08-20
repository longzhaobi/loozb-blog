<template>
  <div class="container loozb-content">
    <ArticleItem v-for="article of page.data" :key="article.id_" :article = "article"/>
    <Pagination :page="page"/>
  </div>
</template>

<script>
  import ArticleItem from '~/components/article/ArticleItem'
  import Pagination from '~/components/Pagination'
  export default {
    components: {
      ArticleItem,
      Pagination
    },
    props: {
      page: {
        required:true
      }
    }
  }
</script>

<style scoped>
  .loozb-content {
    margin:25px auto;
  }

  .article-list:last-child{
   margin-bottom:20px;
  }
</style>
