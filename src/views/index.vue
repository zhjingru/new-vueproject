<script setup>
import { ref } from 'vue'
import NavMenu from './navMenu.vue';
import Header from './headNav.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航栏 -->
      <NavMenu />
      <el-container class="header-and-main">
        <!-- 头部 -->
        <el-header>
          <Header />
        </el-header>
        <!-- main -->
        <el-main>
          <el-scrollbar>
            <RouterView />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<style scoped>
.header-and-main {
  flex-direction: column;
  height: 100vh;
}

.el-main{
  padding-right: 0;
}
</style>
