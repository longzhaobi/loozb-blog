<template>
  <div class="container loozb-content">
    <article-item v-for="article of page.data" :article = "article"/>
  </div>
</template>

<script>
  import ArticleItem from '~components/article/ArticleItem'
  export default {
    components: {
      ArticleItem
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
