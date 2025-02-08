<script setup>
import InterpreterComponent from '../components/InterpreterComponent.vue';
import ManagerComponent from '../components/ManagerComponent .vue';
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-container>
          <el-header class="header-style">|  高级检查推荐</el-header>
          <el-main>
            <div class="container" style="justify-content: flex-start;">
              <div class="container1" style="margin-top: 10px;">
                <StyledBox />
              </div>
              <div>
                <div style="display: flex; align-items: center;">
                  <img src="/src/assets/css/系统.jpg" alt="" style="width: 30px; height: 30px;">
                  <p style="font-size: 15px; margin-left: 5px; font-weight: bold;">系统正在输入...</p>
                </div>
                <div class="grid-container">
                  <div v-for="(output, index) in outputs" :key="index" class="grid-item">
                    <img :src="output.imageUrl" alt="" class="item-image" />
                    <p class="item-message" style="font-size: 14px;">{{ output.message }}</p>
                  </div>
                  <div v-if="showBackendInput"
                                    style="margin-top: 20px; display: flex; align-items: center;">
                                    <!-- 可以根据需要添加margin-top或其他样式 -->
                                    <img src="/src/assets/css/系统.jpg" alt="" style="width: 30px; height: 30px;">
                                    
                                    <p style="font-size: 15px; margin-left: 5px; font-weight: bold;">后端输入</p>
                                </div>
                       <button v-if="showCompleteButton" @click="goTo6" style="background-color: coral; color: white;">
                  <strong>完成</strong>
                </button>         
                </div>
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

.grid-container {
    column-count: 3; /* 将容器分为三列 */
    column-gap: 20px; /* 列之间的间距 */
    column-fill: auto; /* 内容从第一列开始填充 */
    max-height: 500px; /* 设置容器的最大高度 */
    width: 80%; /* 容器宽度设为窗口宽度的80% */
    margin: 0 auto; /* 水平居中 */
    padding: 10px; /* 可选：为容器添加内边距 */
    overflow-y: auto; /* 如果内容超出最大高度，显示滚动条 */
  }
  
  .grid-item {
    break-inside: avoid; /* 防止子元素在列中被分割 */
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 水平居中对齐 */
    margin-bottom: 20px; /* 每个子元素之间的间距 */
    
  }
  
  .item-image {
    width: 120px;
    height: 30px;
    margin-bottom: 10px; /* 图片和文字之间的间距 */
  }
  
  .item-message {
    font-size: 15px;
    margin: 0; /* 去掉默认的 margin */
    text-align: center; /* 文字居中对齐 */
    word-wrap: break-word; /* 允许长文字换行 */
  }
  
  .backend-input {
    margin-top: 20px; /* 后端输入部分的顶部间距 */
  }
  
  .container {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* 内容从顶部开始 */
  }
  
  .container1 {
    display: flex;
    width: 80%;
    margin-bottom: 20px;
  }

  </style>
  
  <script>
  import { Delete } from '@element-plus/icons-vue';
  export default {
    components: {
      InterpreterComponent,
      ManagerComponent,
      Delete,
    },
    data() {
      return {
        managerOutput: '',
        patientAnalystOutput: '',
        roles: [
          '解释者',
          '管理者',
          '患者分析师',
          '搜索者',
          '反思者',
          '系统',
        ],
        steps: [
          { role: '解释者', message: '根据患者XX的序列数据，预测其下一个阶段接受的检查项目。其中序列数据包括：', imageUrl: '/src/assets/css/解释者.png' },
          { role: '管理者', message: '这些医疗信息涉及各个科室，我需要分析患者的个性化健康状况', imageUrl: '/src/assets/css/管理者.png' },
          { role: '管理者', message: '呼叫患者分析师分析患者状况…', imageUrl: '/src/assets/css/管理者.png' },
          { role: '患者分析师', message: '这是一位69岁的男性患者，该患者有心血管疾病、代谢性疾病、消化系统疾病，并出现高烧、呕吐和头晕等症状。患者还进行了多次结肠镜检查，可能与消化系统问题相关。', imageUrl: '/src/assets/css/患者分析师.png' },
          { role: '管理者', message: '呼叫搜索者丰富现有信息，以寻找患者交互信息中潜在的内部关联。', imageUrl: '/src/assets/css/管理者.png' },
          { role: '搜索者', message: '心房颤动（Atrial Fibrillation，简称AF或A-fib）是一种常见的心律失常，特征是心房以不规则且快速的节奏颤动，而不是正常的规律跳动。这种不规律的心房收缩会导致心室的节奏也变得不规则，从而影响心脏的有效泵血功能…', imageUrl: '/src/assets/css/搜索者.png' },
          { role: '管理者', message: '从后端接收到的数据', imageUrl: '/src/assets/css/管理者.png' },
          { role: '管理者', message: '呼叫反思者分析该推荐意向的合理性…', imageUrl: '/src/assets/css/管理者.png' },
          { role: '反思者', message: '超声心动图对于全面评估和指导该患者的心血管治疗方案具有重要意义，推荐进行该检查是合理的。', imageUrl: '/src/assets/css/反思者.png' },
        ],
        currentStep: 0,
        outputs: [],
        allStepsComplete: false,
        showCompleteButton: false,
        showBackendInput: false,
      };
    },
    watch: {
      outputs: {
        handler(newOutputs) {
          if (newOutputs.length === this.steps.length) {
            this.allStepsComplete = true;
            this.showCompleteButton = true;
            this.showBackendInput = true;
          }
        },
        deep: true,
      },
    },
    mounted() {
      this.startSteps();
    },
    methods: {
      async startSteps() {
        while (this.currentStep < this.steps.length) {
          const step = this.steps[this.currentStep];
          this.outputs.push(step);
          this.currentStep++;
          await this.delay(1000);
        }
      },
      delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      goTo6() {
        this.$router.push("/history");
      },
    },
  };
  </script>