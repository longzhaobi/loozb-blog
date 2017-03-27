<template>
  <div class="article-list">
    <div class="items">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-warning" v-if="article.sort > 0">置顶</div>
          <div class="pull-right label label-success">{{article.classificationName}}</div>
          <h4><nuxt-link :to="'/articles/' + article.id_" class="text-muted">{{article.title}}</nuxt-link></h4>
        </div>
        <div class="item-content">{{article.digest}}</div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> {{article.readNum}}</a> &nbsp; <span class="text-muted">{{article.ctime}}</span>
           &nbsp;作者: <span class="text-muted">{{article.author}}</span>
          <p style="float:right;"><nuxt-link :to="'/articles/' + article.id_" class="text-muted">阅读详情</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .article-list {
    /*margin-bottom:12px;*/
    background-color: #fff;
    padding:14px;
  }
  .item-heading div {
    margin-left:10px;
  }

</style>
