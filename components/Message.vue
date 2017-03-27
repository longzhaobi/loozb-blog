<template>
  <div class="loozb-tags">
    <div class="panel panel-default">
      <div class="panel-heading">最新留言</div>
      <div class="panel-body panel-tags">
        <div class="comment" v-for="c in messages">
          <div class="content">
            <div class="pull-right text-muted">{{c.ctime}}</div>
            <div><a href="javascript:void(0)"><strong>{{c.reply}}</strong></a> <span v-show="c.byReply"> 回复 <a href="javascript:void(0)"><strong>{{c.byReply}}</strong></a></span></div>
            <div class="text">{{c.content}}</div>
            <div class="actions">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      messages: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .loozb-tags {

  }

  .panel-tags span {
    margin-right:10px;
    margin-bottom:10px;
    display:block;
    float:left;
  }

</style>
