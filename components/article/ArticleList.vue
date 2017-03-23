<template>
  <div class="container loozb-content">
    <div class="row">
      <div class="col-md-8 article-list">
        <article-item v-for="article of page.data" :article = "article"/>
      </div>
      <div class="col-md-4">
        <categories />
        <tags />
        <lately-coment />
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleItem from '~components/article/ArticleItem'
  import Categories from '~components/Categories'
  import LatelyComent from '~components/LatelyComent'
  import Tags from '~components/Tags'
  export default {
    components: {
      ArticleItem,
      Categories,
      LatelyComent,
      Tags
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
