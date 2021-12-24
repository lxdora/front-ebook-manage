<template>
  <div class="home">
    <div class="header-area">
      <default-header></default-header>
    </div>
    <div class="content-area flex">
      <div class="side-menu">
        <SideMenu></SideMenu>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import DefaultHeader from 'comps/Header.vue'
import SideMenu from 'comps/SideMenu.vue'
</script>

<style lang='scss'>
$left-side-width: 220px;
.home{
  width: 100vw;
  height: 100vh;
  .header-area{
    height: 60px;
    position: flxed;
  }
  .content-area{
    height: calc(100% - 60px);
    .side-menu{
      width: $left-side-width;
    }
    .main{
      flex: 1;
    }
  }
}
</style>