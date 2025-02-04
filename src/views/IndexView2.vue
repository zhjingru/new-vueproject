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
  font-size: 2.5rem; /* 字体大小 */
  margin: 4px; /* 移除默认外边距 */
}

.button-container {
  margin-bottom: 100px;
}

.large-button {
  width: 150px; 
  height: 50px; 
  font-size: 16px; 
  padding: 12px 20px; /* 按钮内边距 */
  border-radius: 25px; /* 按钮圆角 */
}
</style>