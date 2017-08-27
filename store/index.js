import Vue from 'vue'
import Vuex from 'vuex'
import axios from '~/plugins/axios'
import qs from 'qs'
Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    //评论
    comments: [],
    commentCurrent: 1,
    commentTotal: 0,
    byReply: '',

    //留言
    messages: [],
    messageCurrent: 1,
    messageTotal: 0,
    byReplyMessage: '',
  },
  mutations: {
    queryCommentSuccess(state, { comments, current, total }) {
      state.comments = comments
      state.commentCurrent = current
      state.commentTotal = total
    },
    changeByReply(state, byReply) {
      state.byReply = byReply
    },


    queryMessageSuccess(state, { messages, current, total }) {
      state.messages = messages
      state.messageCurrent = current
      state.messageTotal = total
    },
    changeByReplyMessage(state, byReply) {
      state.byReplyMessage = byReply
    }
  },
  actions: {
    //评论
    async handleReply({ state, commit }, { comment }) {
      const response = await axios.request({ method: 'post', url: '/api/comments', data: qs.stringify(comment) })
      if (response.status === 200) {
        const { comments=[] } = state
        comments.splice(0, 0, response.data)
        commit('queryCommentSuccess', { comments, current: state.commentCurrent, total: state.commentTotal + 1 })
      }
      return response
    },
    async queryMore({ state, commit }, { payload }) {
      const { data } = await axios.get(`/api/comments?${qs.stringify(payload)}`)
      if (data.httpCode === 200) {
        const comments = state.comments
        data.data.filter((item) => comments.push(item))
        commit('queryCommentSuccess', { comments, current: data.current, total: state.commentTotal })
      }
    },

    //留言
    async handleReplyMessage({ state, commit }, { message }) {
      const { data } = await axios.request({ method: 'post', url: '/api/messages', data: qs.stringify(message) })
      if (data.httpCode === 200) {
        const messages = state.messages
        messages.splice(0, 0, data.tbMessage)
        commit('queryMessageSuccess', { messages, current: state.messageCurrent, total: state.messageTotal + 1 })
      }
      return data
    },
    async queryMoreMessage({ state, commit }, { payload }) {
      const { data } = await axios.get(`/api/messages?${qs.stringify(payload)}`)
      if (data.httpCode === 200) {
        const messages = state.messages
        data.data.filter((item) => messages.push(item))
        commit('queryMessageSuccess', { messages, current: data.current, total: state.messageTotal })
      }
    },
  }
})

export default store
