<template>
  <div class="container loozb-content">
    <div class="row">
      <div class="col-md-8 article-list">
        <article-list />
        <article-list />
        <article-list />
        <article-list />
        <article-list />
        <article-list />
        <article-list />
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
  import ArticleList from '~components/article/ArticleList'
  import Categories from '~components/Categories'
  import LatelyComent from '~components/LatelyComent'
  import Tags from '~components/Tags'
  export default {
    components: {
      ArticleList,
      Categories,
      LatelyComent,
      Tags
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
