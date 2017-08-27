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
  computed: {
    rows() {
      return this.articles.data
    },
    page() {
      return { current: this.articles.current, total: this.articles.total, size: this.articles.size }
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
