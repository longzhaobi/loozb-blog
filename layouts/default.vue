<template>
  <div class="main">
    <div class="wrap">
      <div class="min">
        <header-panel/>
        <nuxt/>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import HeaderPanel from '~components/HeaderPanel.vue'

export default {
  components: {
    MyFooter,
    HeaderPanel
  }
}
</script>

<style>
.main {
  height:100%;
}
.wrap{
    min-height: 100%;
}

.min{
    /*padding-bottom: 360px;*/
}

</style>
