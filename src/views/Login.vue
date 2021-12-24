<template>
  <div class="login flex">
    <div class="login-content" :class="showForm==='login'?'showLogin':'showRegister'">
      <transition name="no-mode-fade">
        <div class="login-form" v-if="showForm==='login'">
          <div class="title">书虫电子书管理系统·登录</div>
          <el-input v-model="user.account" placeholder="账号" />
          <el-input v-model="user.password" placeholder="密码" />
          <el-button class="btn login-btn">登录</el-button>
          <el-button class="btn register-btn" @click="showForm='register'">还没账号，去注册</el-button>
        </div>
        <div class="register-form" v-else>
          <div class="register-form-top flex">
            <div class="back" @click="showForm='login'"><el-icon><back /></el-icon></div>
            <div class="title">书虫电子书管理系统·注册</div>
          </div>
          <el-form
            label-width="120px"
            :model="register"
            :rules="rules"
          >
            <el-form-item label="账号">
              <el-input v-model="register.account"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="register.nickName"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="register.gender">
                <el-radio label="1">男</el-radio>
                <el-radio label="0">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生日">
              <el-date-picker v-model="register.birthday" type="date" placeholder="birthday"></el-date-picker>
            </el-form-item>
            <el-form-item label="手机">
              <el-input v-model="register.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="register.email"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model="register.password"></el-input>
            </el-form-item>
            <el-form-item label="密码确认">
              <el-input type="password" v-model="register.rePassword"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
const user = reactive({
  account: '',
  password: ''
})
const showForm = ref('login')
const rules = reactive([])
const register = reactive({
  account: '',
  nickName: '',
  gender: 1,
  birthday: '',
  phone: '',
  email: '',
  password: '',
  rePassword: ''
})
</script>

<style lang='scss' scoped>
.el-form ::v-deep .el-form-item__label{
  color: #eee;
}
.el-form ::v-deep .el-radio__label{
  color: #eee;
}
.login{
  width: 100vw;
  height: 100vh;
  background: url('../assets/ebook_bg.jpg');
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  @keyframes showLogin {
    0%{
      height: 600px;
    }
    100%{
      height: 400px;  
    }
  }
  @keyframes showRegister {
    0%{
      height: 400px;
    }
    100%{
      height: 600px;
    }
  }
  .login-content{
    width: 500px;
    backdrop-filter: blur(10px);
    color: #FFF;
    padding: 50px;
    .login-form{
      .title{
        font-size: 32px;
        margin-bottom: 40px;
      }
      position: relative;
      backdrop-filter: blur(10px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      .btn{
        width: 100%;
        font-size: 18px;
        padding: 0;
        color: #FFF;
        border: none;
        margin: 0;
      }
      .el-input::first-child{
        margin-top: 30px;
      }
      .login-btn{
        margin-top: 30px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,111,237,1) 0%, rgba(0,211,255,1) 100%);
      }
      .register-btn{
        background: linear-gradient(31deg, rgba(2,0,36,1) 0%, rgba(7,181,83,1) 0%, rgba(0,211,255,1) 100%);
      }
    }
    .register-form{
      .register-form-top{
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        .back{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #FFF;
        }
        .title{
          font-size: 32px;
        }
      }
    }
  }
  .showLogin{
    animation: showLogin .5s ;
  }
  .showRegister{
    animation: showRegister .5s ;
  }
}
.no-mode-fade-enter-active, .no-mode-fade-leave-active {
  transition: opacity .5s
}

.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}

</style>