<template>
  <div class="main">
    <div class="wrap">
      <div class="min">
        <MyHeader/>
        <nuxt/>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import MyHeader from '~/components/Layout/Header.vue'
export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
.main {
  height: 100vh;
}

.wrap {
  min-height: 100%;
}
</style>
