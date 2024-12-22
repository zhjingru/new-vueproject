<script setup>
import {ref} from 'vue'
const isCollapse = ref(true)

import {
  Clock,
  Star,
  User,
} from '@element-plus/icons-vue'

const circleUrl = ref('https://via.placeholder.com/150');

</script>

<template>
<el-aside width="200px" class="aside">
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;  display:
   flex; align-items: center;">
    <div class="header">
    <!-- 用户头像 -->
    <el-avatar :size="40" :src="circleUrl" style="margin-right: 10px;"></el-avatar>
    </div>
    <el-radio-button :value="false" v-show="isCollapse">|||</el-radio-button>
    <el-radio-button :value="true" v-show="!isCollapse">|||</el-radio-button>
  </el-radio-group>
  <el-sub-menu index="1">
      <template #title>
       <el-icon style="font-size: 24px"><User /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">既往病史</el-menu-item>
        <el-menu-item index="1-2">现病史</el-menu-item>
        <el-menu-item index="1-3">个人史</el-menu-item>
        <el-menu-item index="1-4">家庭成员信息</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  <el-menu-item index="2">
    <el-icon style="font-size: 24px"><Star /></el-icon>
      <template #title>高级检查推荐</template>
    </el-menu-item>
  <el-sub-menu index="3">
      <template #title>
        <el-icon style="font-size: 24px"><Clock /></el-icon>
        <span>推荐历史</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">冠状动脉检查</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</el-aside>
</template>

<style scoped>
@import '@/assets/css/index.css';

.aside {
  background-color: rgba(122, 105, 105, 0.777) !important;
}

.el-menu-vertical-demo {
  background-color: rgba(135, 118, 118, 0.777) !important;
}

.el-sub-menu{
  color: #906161; /* 黑色 */
  background-color: #cbb8b8; /* 黑色背景 */
}

.el-menu-item{
  color: #b49898; /* 黑色 */
  background-color: #dacdcd; /* 黑色背景 */
}

;

</style>
