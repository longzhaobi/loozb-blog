<template>
  <div class="loozb-categories">
    <ul class="classif_ul">
      <li class="classif_ul_li" v-for="c of classifications" :class="{myActive: classification.id_ === c.id_}">
        <nuxt-link :to="'/classifications/' + c.id_" class="text-muted">
          <div class="f-left">{{c.name}}</div>
          <div class="f-right">({{c.articleNum}})</div>
        </nuxt-link>
      </li>
    </ul>
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
      },
      classification: {
        type:Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .loozb-categories {
    
  }

  .classif_ul {
    width:140px;
  }
  .classif_ul_li {
    height:40px;
    background-color: #fff;
    line-height: 40px;
    list-style: none;
    margin-bottom: 5px;
    padding-left:10px;
    padding-right:10px;
  }
</style>
