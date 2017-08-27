<template>
  <div class="container loozb-content">
    <ArticleItem v-for="r of rows" :key="r.id" :article="r" />
    <Pagination :page="page" />
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
    articles: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.articles)
  },
  computed: {
    rows() {
      return this.articles.rows
    },
    page() {
      return { current: this.articles.current, total: this.articles.total, size: 20 }
    }
  }
}
</script>

<style scoped>
.loozb-content {
  margin: 25px auto;
}

.article-list:last-child {
  margin-bottom: 20px;
}
</style>
