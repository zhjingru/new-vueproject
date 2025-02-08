<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToUserProfile = () => {
  router.push('/person');
};
</script>

<template>
  <div class="main-container">
    <div class="title-container">
      <h1 class="title">欢迎体验智慧医疗检查推荐系统</h1>
    </div>
    <div class="button-container">
      <el-button type="primary" round class="large-button" @click="goToUserProfile">填写个人信息</el-button>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between; 
  align-items: center; 
  text-align: center; 
  overflow: hidden;
  background-image: url('@/assets/background.jpg');
}

.title-container {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  color: rgba(63, 187, 196, 0.757);
  font-size: 4rem; /* 字体大小放大 */
  margin: 4px; /* 移除默认外边距 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加阴影 */
}

.button-container {
  margin-bottom: 100px;
}

.large-button {
  width: 200px; 
  height: 90px; 
  font-size: 25px; 
  border-radius: 50px; /* 调整圆角大小 */
  background-color: rgba(63, 187, 196, 0.757); /* 改变按钮颜色 */
  border: none; /* 移除边框 */
  color: white; /* 按钮文字颜色 */
}
</style>