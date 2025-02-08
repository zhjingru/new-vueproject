<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToup = () => {
  router.push('/up');
};

</script>



<template>
  <div class="common-layout">
      <el-container>
          <el-container>
          <el-header class="header-style">|  推荐历史记录</el-header>
      </el-container>
      <el-main class="main-style">
          <div class="blue-border">
            <div class="blue-box">
              <div class="icon-container">
                <svg t="1738894777877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4363" width="30px" height="30px">
                  <path d="M860.857 556.956c0-58.171-47.325-105.496-105.496-105.496-58.171 0-105.496 47.325-105.496 105.496 0 49.05 33.696 90.268 79.122 102.024v1.618c0 79.324-64.535 143.859-143.859 143.859s-143.859-64.535-143.859-143.859v-26.887c123.984-14.318 220.583-119.885 220.583-247.643V162H549.164v57.543h55.146v166.524c0 105.763-86.048 191.812-191.812 191.812s-191.812-86.048-191.812-191.812V219.543h47.953V162H163.143v224.067c0 127.759 96.599 233.326 220.583 247.643v26.887C383.726 771.653 474.073 862 585.128 862S786.53 771.653 786.53 660.598v-2.853c43.001-13.327 74.327-53.465 74.327-100.789z m-105.496 47.953c-26.44 0-47.953-21.513-47.953-47.953s21.513-47.953 47.953-47.953 47.953 21.513 47.953 47.953-21.513 47.953-47.953 47.953z" fill="#1296db" p-id="4364"></path>
                </svg>
                <div class="recommendation">推荐检查项目</div>
              </div>
              <div class="blue-container"> 
                XXX
              </div>
              <div class="blue-clock"> 
                时间:
              </div>
              <div class="instruction">说明：用户可根据自身情况，前往相关医疗机构完成上述推荐检查项目，并将检查结果上传至本系统，进一步校正系统预测疾病的结果</div>
            </div>
            <el-button class="yellow-button" @click="goToup">返回检查页</el-button>
          </div>
        </el-main>
        <el-footer class="footer-style">
    <div class="footer-content">
      <p class="warning">温馨提示：</p>
      <ul>
        <li>1. 针对您上传的病例、检查报告等文件，我们只用于提取相关疾病信息，且严格保护您的个人隐私信息。</li>
        <li>2. 为保证推荐的准确性，请确保上传文件的真实性和完整性。</li>
        <li>3. 预测疾病为系统算出，仅供参考。</li>
      </ul>
    </div>
  </el-footer>
      </el-container>
  </div>
  </template>
  
  <style scoped>
  .header-style {
    font-size: 20px;
    color: rgba(44, 148, 196, 0.921);
    font-weight: bolder;
  }
  
  .el-header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f0f2f5;
    padding: 0 20px;
  }
  
  /* 主页面样式 */
  .main-style {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #f0f2f5;
  }
  .el-main {
    background-color: #feffff;
    padding: 20px;
    min-height: 62vh;
  }
  
  .blue-border {
    border: 2px solid rgba(0, 225, 255, 0.264);
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 300px;
    width:1000px;
    align-items: center;
    border-radius: 20px;
  }
  
  .blue-box {
    background-color: rgba(88, 235, 243, 0.606);
    color: white;
    padding: 20px;
    border-radius: 8px;
    width: 340px; 
    height: 220px;
    text-align: center;
    margin-bottom: 20px; /* 与黄色按钮的间距 */
    border-radius: 20px;
  }
  
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    margin-right: 10px;
  }
  
  .recommendation {
    margin-bottom: 10px; /* 与蓝色按钮的间距 */
    color: rgba(44, 148, 196, 0.921);
    font-weight: bold;
  }
  
  .blue-container {
    background-color: rgb(87, 205, 255);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-size: 1.3rem;
    cursor: pointer;
    display: inline-block; 
    height: 40px;
    width: 150px;
    font-weight: bold;
    text-align: center; /* 水平居中 */
    line-height: 40px;
    margin-top: 20px;
  }
  
  .blue-clock {
    color: rgba(44, 148, 196, 0.921);
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 30px;
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-block; 
    height: 20px;
    width: 120px;
    margin-top: 10px;
  }
  
  .instruction {
    font-size: 0.7rem; 
    color: rgb(21, 162, 222);
    margin-top: 20px;
    text-align: center;
  }
  
  /* 黄色按钮 */
  .yellow-button {
    background-color: rgb(243, 160, 43);
    color: rgb(255, 255, 255);
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 20px;
  }
  
  .yellow-button:hover {
    background-color: rgb(243, 160, 43); /* 鼠标悬停时的背景颜色 */
  }
  
  .footer-style {
    color: rgb(156, 148, 148);
    text-align: left; /* 左对齐 */
    padding: 2px;
    margin-top: 2px;
  }
  
  .footer-content {
    font-size: 0.9rem;
  }
  
  .footer-content ul {
    padding: 0;
    margin: 0;
  }
  
  .footer-content li {
    margin-bottom: 5px; 
  }
  </style>