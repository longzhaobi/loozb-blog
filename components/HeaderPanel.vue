<template>
  <div class="loozb-header">
    <div class="container">
      <div class="header-panel">
        <div class="left">
          <nuxt-link to="/" class="loozb-register">首页</nuxt-link>
          <nuxt-link to="/message" class="loozb-register">留言</nuxt-link>
          <nuxt-link to="/about" class="loozb-register">关于</nuxt-link>
        </div>
        <div class="right">
          <a class="loozb-register" href="https://github.com/longzhaobi/loozb-blog" target="_blank"><i  style="font-size:20px;" class="icon icon-github"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .loozb-header {
    height:40px;
    width:100%;
    margin-top:0px;
    box-shadow: 0 10px 10px rgba(0,0,0,.3);
    /*background-color: #3949AB;*/
    background-color: rgb(77,77,77);
  }
  .header-panel {
    display: flex;
    justify-content: space-between;
  }

  .loozb-register {
    display: inline-block;
    height:100%;
    width:50px;
    line-height: 40px;
    text-align: center;
    color:#fff;
    font-size:13px;
  }
  .loozb-register:hover {
    background-color: rgba(0,0,0,.08);
  }
</style>
