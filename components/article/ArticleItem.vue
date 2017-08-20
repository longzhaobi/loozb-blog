<template>
  <div class="article-list">
    <div class="items">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-warning" v-if="article.sort > 0">置顶</div>
          <div class="pull-right label label-success">{{article.classificationName}}</div>
          <h4>
            <a :href="'/articles/' + article.id_" class="text-muted my-title" target="_blank">{{article.title}}</a>
          </h4>
        </div>
        <div class="item-content">
          <div class="media pull-right"><img src="~/assets/img/img2.jpg" alt=""></div>
          <div class="text">
            {{article.digest}}
          </div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted">
            <i class="icon-comments"></i> {{article.readNum}}</a> &nbsp;
          <span class="text-muted">{{article.ctime}}</span>
          &nbsp;作者:
          <span class="text-muted">{{article.author}}</span>
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
  padding: 14px;
}

.item-heading div {
  margin-left: 10px;
}

.my-title {
  color: #333333;
  font-size: 16px;
}

.my-title:hover,
.my-title:focus,
.my-title:visited {
  color: #969696 !important;
  cursor: pointer;
  text-decoration: none;
}
</style>
