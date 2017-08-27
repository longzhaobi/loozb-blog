<script>
import NavPanel from '~/components/NavPanel.vue'
import axios from '~/plugins/axios'
import qs from 'qs';
export default {
  data() {
    return {
      username:'',
      password:''
    }
  },
  layout:null,
  components: {
    NavPanel
  },
  methods: {
    onLogin () {
      alert(1)
    }
  }
}
</script>
<template>
  <section class="my-container">
    <NavPanel :show="false"/>
    <div class="container">
      <div class="login-panel">
        <form class="form-horizontal form">
          <div class="form-group">
            <label for="exampleInputAccount4" class="col-sm-2">账号</label>
            <div class="col-md-6 col-sm-10">
              <input type="text" class="form-control" id="exampleInputAccount4" v-model="username" style="width:410px;height:40px;" placeholder="电子邮件/手机号/用户名">
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword4" class="col-sm-2">密码</label>
            <div class="col-md-6 col-sm-10">
              <input type="password" class="form-control" id="exampleInputPassword4" v-model="password" style="width:410px;height:40px;" placeholder="密码">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> 记住我
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default btn-lg" @click="onLogin">登录</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.my-container {
  width: 100%;
  height: 100%;
}

.login-panel {
  margin: -20px auto;
  position: relative;
  width: 600px;
  padding:20px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 8px #226039;
  border-radius: 5px;
}

.form {
  display: inline;
  position: absolute;
  left: 0px;
  top:50px;
  right: 0px;
  padding-left:20px;
  bottom:0px;
  /* padding-left:100px; */
}
</style>
