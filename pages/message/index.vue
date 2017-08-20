<script>
import MessageList from '~/components/message/MessageList'
import MessageInput from '~/components/message/MessageInput'
import axios from '~/plugins/axios'
import qs from 'qs';
export default {
  async asyncData ({ store, params }) {
    const { data } = await axios.get(`/api/messages`)
    store.commit('queryMessageSuccess', { messages: data.data, current: data.current, size: data.size, total: data.total })
  },
  components: {
    MessageList,
    MessageInput
  },
  computed: {
    messages() {
      return this.$store.state.messages
    },
    current() {
      return this.$store.state.messageCurrent
    }
  }
}
</script>
<template>
  <section class="container my-container">
    <MessageInput/>
    <MessageList :messages="messages" :current="current" />
  </section>
</template>

<style scoped>
.my-container {
  max-width: 800px;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
