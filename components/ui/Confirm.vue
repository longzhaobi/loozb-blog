<template>
  <div class="my-confirm" v-show="show">
    <div>asdf
    </div>
  </div>
</template>

<script>
import Popup from './popup'
export default {
  mixins: [Popup],
  name: 'confirm',
  methods: {
    // 响应 overlay事件
    overlayClick() {
      this.show = false
    },
    // 响应 esc 按键事件
    escPress() {
      this.show = false
    }
  }
}
</script>

<style scoped>
.my-confirm {
  width: 200px;
  height: 50px;
}
</style>
