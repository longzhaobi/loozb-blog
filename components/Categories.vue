<template>
  <div class="loozb-categories">
    <div class="panel panel-default">
      <div class="panel-heading">分类</div>
      <div class="panel-body">
        <ul class="list-group my-list-group">
          <li class="list-group-item" v-for="c of classifications">
            <div class="f-left">{{c.name}}</div>
            <div class="f-right">({{c.articleNum}})</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~plugins/axios'
  export default {
    data () {
      return {
        title:'abc'
      }
    },
    props: {
      classifications: {
        required:true
      }
    }
  }
</script>

<style scoped>
  .loozb-categories {

  }

  .my-list-group .list-group-item{
    border-width: 0px;
    height:40px;
  }
</style>
