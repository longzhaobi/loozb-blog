<template>
  <footer>
    <div class="footer-container">这里是底部组件,高240,需要滑动到底部才能看见</div>
    <!-- <div class="footer-bottom">备案信息</div> -->
  </footer>
</template>

<style scoped>
 footer {
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: #3949AB;
  box-shadow: 0 0 20px rgba(0,0,0,.3);
  width: 100%;
  height:240px;
  font-size:20px;
  color: #fff;
}
.footer-container {
  height:180px;
}
.footer-bottom {
  height: 60px;
  background-color: rgb(51,66,154);
}
</style>
