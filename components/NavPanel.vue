<template>
  <div class="loozb-nav">
    <div class="container">
      <div class="nav-panel">
        <div class="logo-panel">
          <img v-if="classification" :src="classification.url" class="img-rounded logo" alt="圆形图片">
          <img v-else src="../assets/img/myself.jpg" class="img-rounded logo" alt="圆形图片">
          <div class="logo-text">
            <p>{{classification ? classification.name : 'Long Zhao Bi'}}</p>
            <p>{{classification ? classification.description : 'chuan_long@outlook.com'}}</p>
          </div>
        </div>
        <div>
          <nuxt-link to="/">HOME</nuxt-link>
          <a class="loozb-register">ABOUT</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      classification: {
        type: Object
      }
    }
  }
</script>
<style scoped>
  .loozb-nav {
    height:115px;
    width:100%;
    background-color: rgb(63,81,181);
  }

  .nav-panel {
    display: flex;
    align-items:center;
    justify-content: space-between;
  }
  .loozb-register {
    display: inline-block;
    height:100%;
    width:50px;
    line-height: 115px;
    text-align: center;
    color:#fff;
    font-size:13px;
  }
  .logo-panel {
    display: flex;
    flex-direction: row;
  }
  .logo {
    height:50px;
    width:50px;
  }
  .logo-text {
    display: inline-block;
    color: #fff;
    margin-left:10px;
    height:50px;
  }
  .logo-text p:first-child {
   font-size: 20px;
   text-transform: uppercase;
   font-weight: 500;
  }
  .logo-text p:last-child {
    opacity: .5;
    filter: alpha(opacity=50);
    display: block;
    margin-top: -10px;
  }
</style>
