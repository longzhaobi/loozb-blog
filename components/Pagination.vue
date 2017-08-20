<template>
  <div class="my-pager">
    <ul class="pager pager-loose">
      <li class="previous" :class="{disabled:!hasPre}">
        <a @click.stop="pageChange(page.current - 1)">«</a>
      </li>
      <li v-for="(p, index) in totalPage" :key="p.id_" :class="{active: page.current === index + 1}">
        <a @click.stop="pageChange(index + 1)">{{ index + 1 }}</a>
      </li>
      <li class="next" :class="{disabled:!hasNext}">
        <a @click.stop="pageChange(page.current + 1)">»</a>
      </li>
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
  computed: {
    hasPre() {
      return this.page.current > 1
    },
    hasNext() {
      return this.page.total > this.page.current * this.page.size
    },
    totalPage() {
      return Math.ceil(this.page.total / this.page.size);
    }
  },
  methods: {
    pageChange(current) {
      this.$router.push({ query: { current } })
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.my-pager {
  width: 100%;
  text-align: center;
}
</style>
