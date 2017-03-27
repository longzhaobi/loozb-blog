<template>
  <footer class="container-fluid my-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <p><i class="icon icon-github"></i> Github</p>
          <ul class="my-github">
            <li><a href="https://github.com/longzhaobi/loozb-blog" target="_blank">loozb-blog</a></li>
            <li><a href="https://github.com/longzhaobi/loozb-front" target="_blank">loozb-front</a></li>
            <li><a href="https://github.com/longzhaobi/loozb-server" target="_blank">loozb-server</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <p><i class="icon icon-branch"></i> 相关站点</p>
          <ul class="my-github">
            <li><a href="https://ant.design/docs/react/introduce-cn" target="_blank">ant-design</a> 一个UI设计语言</li>
            <li><a href="http://zui.sexy/" target="_blank">zui</a> 一个基于 Bootstrap 深度定制开源前端实践方案</li>
            <li><a href="https://cn.vuejs.org/v2/guide" target="_blank">vuejs</a> 一套构建用户界面的渐进式框架</li>
            <li><a href="https://cn.nuxtjs.org/" target="_blank">nuxt.js</a> 一个基于 Vue.js 的服务端渲染应用框架</li>
          </ul>
        </div>
        <div class="col-md-4">
          <p><i class="icon icon-comments-alt"></i> 社区</p>
          <ul class="my-github">
            <li><a href="https://github.com/longzhaobi/loozb-blog/issues" target="_blank">反馈BUG</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
 footer {
  border-top: 1px solid #ddd;
  background-color: #333333;
  box-shadow: 0 0 20px rgba(0,0,0,.3);
  width: 100%;
  height:200px;
  padding-top:30px;
  color: #fff;
}
.my-github {
  list-style: none;
  margin:0;
}
.my-github li {
  color:#eee;
}
.my-github li a {
  color: rgb(16,142,233);
}
</style>
