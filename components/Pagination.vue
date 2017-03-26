<template>
  <div class="my-pager">
    <ul class="pager pager-loose">
      <li class="previous"><a href="your/nice/url">«</a></li>
      <li v-for="(p, index) in Math.ceil(page.total/page.size)" :class="{active: page.current === index + 1}"><a href="your/nice/url">{{ index + 1 }}</a></li>
      <li class="next"><a href="your/nice/url">»</a></li>
    </ul>
  </div>

</template>

<script>
  export default {
    props: {
      page: {
        required: true
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
  .my-pager {
    width: 100%;
    text-align: center;
  }
</style>
