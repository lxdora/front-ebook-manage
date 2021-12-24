<template>
  <div class="login flex">
    <div class="login-content bg_blur">
      <div class="title">书虫电子书管理系统</div>
      <el-input v-model="user.account" placeholder="账号" />
      <el-input v-model="user.password" placeholder="密码" />
      <el-button class="login-btn">登录</el-button>
      <el-button class="register-btn">还没账号，去注册</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
const user = reactive({
  account: '',
  password: ''
})
</script>

<style lang='scss' scoped>
.login{
  width: 100vw;
  height: 100vh;
  background: url('../assets/ebook_bg.jpg');
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  .login-content{
    width: 500px;
    height: 400px;
    position: relative;
    backdrop-filter: blur(10px);
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 50px;
    gap: 20px;
    .title{
      font-size: 32px;
      margin-top: 60px;
    }
  }
}
</style>