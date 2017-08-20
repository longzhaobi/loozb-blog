<template>
  <div class="loozb-tags">
    <div class="panel panel-default">
      <div class="panel-heading">最新评论</div>
      <div class="panel-body panel-comment">
        <div class="comment" v-for="c in comments" :key="c.id_">
          <div class="content">
            <div class="pull-right text-muted">{{c.ctime}}</div>
            <div>
              <a href="javascript:void(0)">
                <strong>{{c.reply}}</strong>
              </a>
              <span v-show="c.byReply"> 回复
                <a href="javascript:void(0)">
                  <strong>{{c.byReply}}</strong>
                </a>
              </span>
            </div>
            <div class="text">{{c.content}}</div>
            <div class="actions">
              <nuxt-link :to="'articles/' + c.articleId_" class="text-muted">文章地址</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments']
}
</script>

<style scoped>
</style>
