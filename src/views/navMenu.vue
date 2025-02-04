<script setup>
import { ref } from 'vue'
import { reactive, toRefs } from 'vue'
const avatarUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png');

import {
  Clock,
  Star,
  User,
} from '@element-plus/icons-vue'

const form = ref({
  name: '',
});
</script>

<template>
  <el-aside>
    <el-menu router unique-opened>
      <a  class="logo">
        <el-col :span="12">
               <div class="demo-avatar">
                   <el-avatar :size="100" :src="avatarUrl" />
                </div>
        </el-col>
        <h3>{{ form.name || '用户名' }}</h3>
      </a>
      <!-- <div class="user-profile">
    <img :src="user.avatarUrl" alt="User Avatar" class="user-avatar">
    <h5>{{ user.username }}</h5>
  </div> -->

      <el-menu-item index="/person">
        <el-icon>
          <User />
        </el-icon> <span>用户个人信息管理</span>
      </el-menu-item>

      <el-menu-item index="/up">
        <el-icon>
          <Star />
        </el-icon> <span>高级检查推荐</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Clock />
          </el-icon> <span>推荐历史</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="item in recommendations" :key="item.id" :index="`2-${item.id}`">
            {{ item.name }}
          </el-menu-item>
            <el-menu-item index="1-1">冠状动脉造影</el-menu-item>
            <el-menu-item index="1-2">其他</el-menu-item>
        </el-menu-item-group>

      </el-sub-menu>

    </el-menu>
  </el-aside>
</template>

<style scoped>
.el-menu-item span,
.el-sub-menu__title span,
.el-icon {
  color: rgb(255, 251, 251) !important;
}


.el-aside {
  background-color: rgb(62, 73, 83);
  height: 100vh;
  width: auto;

}

.el-menu {
  width: 200px;
  background-color: rgb(62, 73, 83);
  border-right: none;
}

.logo {
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  height: 190px;
  text-decoration: none;
  color: black;
}

.demo-avatar {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; 
}

h3 {
  color: black;
  text-align: center;
}
</style>
