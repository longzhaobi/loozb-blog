<template>
  <div>
    <div class="comment" v-for="c in messages" :key="c.id_">
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
          <a @click.stop="replyComment(c.reply)">回复</a>
        </div>
      </div>
    </div>
    <div class="comment-footer">
      <a @click.stop="queryMore" v-show="isMore">查看更多</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    queryMore() {
      this.$store.dispatch({ type: 'queryMoreMessage', payload: { current: this.current + 1, articleId: this.articleId } });
    },
    replyComment(byReply) {
      this.$store.commit('changeByReplyMessage', byReply)
    }
  },
  computed: {
    isMore() {
      return this.current < Math.ceil(this.$store.state.messageTotal / 5)
    }
  },
  props: {
    messages: {
      type: Array,
      default() {
        return []
      }
    },
    current: {
      type: Number,
      default() {
        return 1
      }
    },
    articleId: {
      type: String
    }
  }
}
</script>

<style scoped>
.comment {
  margin: 20px;
  border-width: 1px;
}

.comment-footer {
  width: 100%;
  text-align: center;
  height: 30px;
}
</style>
