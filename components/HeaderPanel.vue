<template>
  <div class="loozb-header">
    <div class="container">
      <div class="header-panel">
        <div class="left">
          <a class="loozb-register">注册</a>
          <a class="loozb-register">登录</a>
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
    background-color: #3949AB;
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
