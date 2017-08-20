<template>
  <div class="loozb-categories">
    <div class="panel panel-default">
      <div class="panel-heading">分类</div>
      <div class="panel-body">
        <ul class="list-group my-list-group">
          <li class="list-group-item" v-for="c of classifications" :key="c.id_" :class="{myActive: classification.id_ === c.id_}">
            <nuxt-link :to="'/classifications/' + c.id_" class="text-muted">
              <div class="f-left">{{c.name}}</div>
              <div class="f-right">({{c.articleNum}})</div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data() {
    return {
      title: 'abc'
    }
  },
  props: {
    classifications: {
      required: true
    },
    classification: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.my-list-group .list-group-item {
  border-width: 0px;
  height: 40px;
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #eee;
}

.myActive {
  background-color: #eee;
}
</style>
