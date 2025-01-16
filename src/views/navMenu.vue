<script setup>
import {ref} from 'vue'


import {
  Clock,
  Star,
  User,
} from '@element-plus/icons-vue'


</script>

<template>
<el-aside>
  <el-menu router unique-opened>
    <a href="/" class="logo">
      <img src="@/assets/vue.svg" alt="">
      <h1>用户名</h1>
    </a>

    <el-sub-menu index="1">
      <template #title>
        <el-icon> <User /></el-icon> <span>用户管理</span>
      </template>

      <el-menu-item index="/menus">
       <span>既往病史</span>
      </el-menu-item>

      <el-menu-item index="/resourse">
       <span>现病史</span>
      </el-menu-item>

      <el-menu-item index="/person">
       <span>个人史</span>
      </el-menu-item>

      <el-menu-item index="/family">
       <span>家庭成员信息</span>
      </el-menu-item>

    </el-sub-menu>

    <el-menu-item index="/up">
      <el-icon> <Star /></el-icon> <span>高级检查推荐</span>
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>
        <el-icon> <Clock /></el-icon> <span>推荐历史</span>
      </template>

      <el-menu-item index="/pra">
       <span>冠状动脉检查</span>
      </el-menu-item>

    </el-sub-menu>

  </el-menu>
</el-aside>
</template>

<style scoped>
.el-aside{
  background-color: rgb(232.8, 233.4, 234.6);
  height: 100vh;
  width:auto;

}

.el-menu{
  width:200px;
  background-color: rgb(232.8, 233.4, 234.6);
  border-right: none;
}

.logo{
  display:flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  color: black;
  img{
    width:32px;
    height:32px;

  }
}
</style>
