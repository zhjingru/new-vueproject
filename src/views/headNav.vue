<script setup>
import {ref} from 'vue'

import {
  Service,
  Setting,
  ChatDotRound,
} from '@element-plus/icons-vue'
</script>

<template>
<div>
    <div class="headerNav">
        <div class="header-logo">
            <img src="@/assets/vue.svg" alt="">
            <h4>智慧医疗检查推荐系统</h4>
        </div>
        <div class="header-right">
            <el-icon class="icon-spacing" size="28"><ChatDotRound /></el-icon>
            <el-icon class="icon-spacing" size="28"><Setting /></el-icon>
            <el-icon class="icon-spacing" size="28"><Service /></el-icon>
        </div>
    </div>

</div>
</template>

<style scoped>
@import '@/assets/css/index.css';
</style>