<template>
  <div class="side-menu"> 
    <el-menu
      :default-active="defaultActive"
      active-text-color="#037AFF"
      background-color="#F6FAFF"
      :router="true"
      >
        <el-menu-item index="/home">
          <el-icon><icon-menu /></el-icon>
          <span>图书广场</span>
        </el-menu-item>
      </el-menu>
      <div class="logout" @click="logout">
      退出登录
    </div>
  </div>  
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const defaultActive = ref('/home')
const router = useRouter()
const logout = ()=>{
  router.push('/login')
}
</script>

<style lang='scss'>
.side-menu{
  height: 100%;
  .el-menu{
    height: calc(100% - 60px)
  }
  .logout{
    font-size: 18px;
    line-height: 60px;
    color: #FFF;
    text-align: center;
    font-weight: 500;
    background: linear-gradient(315deg,#07b2ff, #037aff);
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
  }
}
</style>