<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-header class="header-style">|  高级检查推荐</el-header>
        <el-main>
          <div class="container">
            <div class="container3">
              <div class="arrow-box green" style="font-size: 23px;">
              <div style="margin-top: 12px;"><strong>填写您的历史医疗信息</strong></div>  
              </div>

            <div class="arrow-box gray"  style="font-size: 23px; ">
            <div style="margin-top: 12px;"><strong>生成推荐检查项目</strong></div>
            </div>
            </div> 
              
            
            <div class="medical-recommendation">
              
              <form @submit.prevent="handleSubmit">
                <div class="box" style="background-image: url('/src/assets/推荐.jpg'); background-size: cover;">
                  <div class="button-container">
                    <button class="button1" @click="goTo2" style="margin-top: 100px; width: 170px; height: 85px; font-size: 25px; background-color:#FE9900; color: white; border-radius: 50px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"><strong>开始生成</strong></button>
                  </div>
                </div>
              </form>
              
            </div>
            
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f2f5;
  padding: 0 20px;
}

.header-style {
  font-size: 20px;
  color: rgba(44, 148, 196, 0.921);
  font-weight: bolder;
}

.container {
  width: 1100px;
  height: 574px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

  
  .container3 {
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 垂直居中 */
    width: 100%; /* 确保容器宽度足够 */
    margin-left: 100px;
    margin-right: 50px;
  }
  
  .arrow-box {
    position: relative;
    width: 300px; /* 长方形的宽度 */
    height: 70px; /* 长方形的高度 */
    color: white; /* 文字颜色 */
    text-align: center;
    line-height: 50px; /* 垂直居中文字 */
    padding-right: 20px; /* 为箭头留出空间 */
  }
  
  /* 绿色框样式 */
  .arrow-box.green {
    background-color: #bfdbff; /* 绿色背景 */
    z-index: 2; /* 确保绿色框在灰色框上方 */
  }
  
  /* 绿色框的箭头 */
  /* 绿色框的箭头 */
  .arrow-box.green::after {
    content: '';
    position: absolute;
    right: -20px; /* 确保三角形不会覆盖长方形内部内容 */
    top: 0;
    width: 0;
    height: 0;
    border-top: 35px solid transparent; /* 调整高度为长方形高度的一半 */
    border-bottom: 35px solid transparent; /* 同上 */
    border-left: 20px solid #bfdbff; /* 调整宽度以适应设计需求 */
    z-index: 3; /* 确保绿色箭头在灰色框上方 */
  }
  
  /* 灰色框的箭头 */
  .arrow-box.gray::after {
    content: '';
    position: absolute;
    right: -20px; /* 同上 */
    top: 0;
    width: 0;
    height: 0;
    border-top: 35px solid transparent; /* 同绿色框，保持一致性 */
    border-bottom: 35px solid transparent; /* 同上 */
    border-left: 20px solid #378dff; /* 灰色边框与灰色背景匹配 */
  }
  
  /* 灰色框样式 */
  .arrow-box.gray {
    background-color: #378dff; /* 灰色背景 */
    margin-left: -20px; /* 让灰色框与绿色框的箭头重叠 */
    z-index: 1; /* 确保灰色框在绿色箭头下方 */
  }
  

.medical-recommendation {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
}

.box {
  border: 1px;
  padding: 10px;
  width: 900px;
  height: 395px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 0px;
  background-color: white;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.button-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  width: 100%; /* 确保占满整个父容器宽度 */
}

.button1 {
  margin-top: 10px;
  width: 170px;
  height: 85px;
  font-size: 25px;
  background-color: #FE9900;
  color: white;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button4 {
  margin-top: 20px;
  background-color: coral;
}

.custom-divider {
  border-color: dodgerblue;
  height: 4px;
}
</style>

<script>
import { useRouter } from 'vue-router';
const router = useRouter();

export default {
  data() {
    return {
      medicalHistory: '',
      currentSymptoms: '',
      previousChecks: '',
      recommendedChecks: []
    };
  },
  methods: {
    goTo2() {
      this.$router.push("/project"); 
    },
  },
};
</script>