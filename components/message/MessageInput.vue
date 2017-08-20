<template>
  <div class="reply-form">
    <form class="form">
      <div class="form-group">
        <small>
          <a @click.stop="cancelReply" v-show="!replyStatus" class="cancel-reply">回复状态，点击我可以转到评论状态</a>
        </small>
        <textarea class="form-control new-comment-text" v-model="message.content" rows="2" :placeholder="placeholder"></textarea>
      </div>
      <div class="form-group comment-user">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <input type="text" v-model="message.reply" class="form-control" placeholder="输入评论显示名称">
            </div>
          </div>
          <div class="col-md-5">
            <div class="form-group">
              <input type="text" class="form-control" v-model="message.email" placeholder="邮箱（非必填），不公开，博主或许会联系您">
            </div>
          </div>
          <div class="col-md-3">
            <button type="button" @click="handleReply" class="btn btn-block btn-primary">{{replyStatus ? '发表评论' : `回复${byReply}`}}</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        content: '',
        reply: '',
        email: ''
      }
    }
  },
  methods: {
    handleReply() {
      if (this.message.reply === '') {
        alert('请输入您的呢称')
        return
      }
      if (this.message.content === '') {
        alert('请输入您的留言内容')
        return
      }
      let result = confirm("确定发表留言吗？")
      if (result) {
        this.$store.dispatch({ type: 'handleReplyMessage', message: { ...this.message, byReply: this.byReply } }).then((data) => {
          if (data.httpCode === 200) {
            this.message = { content: '', reply: '', email: '' }
            this.cancelReply()
          } else {
            alert(data.msg)
          }
        })
      }
    },
    cancelReply() {
      this.$store.commit('changeByReplyMessage', '');
    }
  },
  computed: {
    byReply() {
      return this.$store.state.byReplyMessage
    },
    placeholder() {
      return this.byReply === '' ? '撰写留言' : `回复 ${this.byReply}:`
    },
    replyStatus() {
      return this.byReply === ''
    }
  }
}
</script>

<style scoped>
.reply-form {
  margin: 20px;
}

.cancel-reply {
  color: #000;
}

.cancel-reply:hover {
  text-decoration: none;
}
</style>
