<script setup>
import {ref} from 'vue'


</script>

<template>
<div>
    <div class="headerNav">
        <div class="header-logo">
            <img src="@/assets/logo.png" alt="" style="margin-left: 20px;">
            <h2>智慧医疗检查推荐系统</h2>
        </div>
    </div>

</div>
</template>

<style scoped>
@import '@/assets/css/index.css';
.header-logo {
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  gap: 16px; 
}

img {
  height: 50px; 
}

h2{
  color: rgba(52, 169, 224, 0.921); 
  margin: 0; 
}
</style>