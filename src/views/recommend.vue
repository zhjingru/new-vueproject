<template>
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
          <div class="box" style="border-radius: 10px; margin-bottom: 0px;margin-left: 20px;">
            <div class="text1" style="margin-left: 5px; font-weight: bold;">当前症状</div>
            <button class="button1" @click="dialogFormVisible = true" style="color:white ; background-color:coral;">添加</button>
          </div>
          <el-dialog v-model="dialogFormVisible" title="请输入症状的详细信息：" width="500" :before-close="handleClose">
            <el-form :model="form" label-width="100px" label-position="right" style="padding-right: 40px;">
              <el-form-item label="症状名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
              </el-form-item>
              <el-form-item label="起始日期" :label-width="formLabelWidth">
                <div class="block">
                  <el-date-picker v-model="form.date" type="month" placeholder="选择月"></el-date-picker>
                </div>
              </el-form-item>
            </el-form>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveFormData">保存</el-button>
              </div>
            </template>
          </el-dialog>
          <div style="height: 200px; width: 800px; margin-left: 20px; margin-top: 0;">
            <el-table :data="tableData" style="width: 100% " max-height="200">
              <el-table-column prop="name" label="症状名称" width="300"></el-table-column>
              <el-table-column prop="date" label="起始日期" width="270"></el-table-column>
              <el-table-column label="操作" width="220">
                <template v-slot:default="scope">
                  <el-button type="danger" circle @click="deleteRow(scope.$index)">
                    <el-icon>
                      <Delete />
                    </el-icon>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </form>
        <form @submit.prevent="handleFormSubmit">
          <div class="box" style="border-radius: 10px; margin-bottom: 0px; margin-left: 20px; ">
            <div class="text1" style="margin-left: 5px; font-weight: bold;">已接受过的检查项目</div>
            <button class="button1" @click="dialogVisible = true" style="color:white ; background-color:coral;">添加</button>
          </div>
          <el-dialog v-model="dialogVisible" title="请输入项目的详细信息：" width="500">
            <el-form :model="projectForm" label-width="100px" label-position="right" style="padding-right: 40px;">
              <el-form-item label="项目名称" :label-width="formLabelWidth">
                <el-input v-model="projectForm.name" autocomplete="off" />
              </el-form-item>
            </el-form>
            <template #footer>
              <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="saveProjectData">保存</el-button>
              </div>
            </template>
          </el-dialog>
          <div style="height: 200px; width: 800px; margin-left: 20px; margin-top: 0px;">
            <el-table :data="projectTableData" style="width: 100%" max-height="200">
              <el-table-column prop="name" label="项目名称" width="450"></el-table-column>
              <el-table-column label="操作" width="350">
                <template v-slot:default="scope">
                  <el-button type="danger" circle @click="deleteProject(scope.$index)">
                    <el-icon>
                      <Delete />
                    </el-icon>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </form>
        <div class="button-container">
          <el-button class="button4" @click="goTo4">下一步</el-button>
        </div>
      </div>
    </div>
  </el-main>
</template>

<script>
import { Delete } from '@element-plus/icons-vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {
  name: 'StyledBox',
  components: {
    Delete
  },
  data() {
    return {
      tableData: [],
      projectTableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        date: null,
      },
      dialogVisible: false,
      projectForm: {
        name: ''
      },
    };
  },
  methods: {
    saveFormData() {
      if (this.form.name && this.form.date) {
        this.tableData.push({ ...this.form });
        this.dialogFormVisible = false;
        this.form.name = '';
        this.form.date = null;
      } else {
        this.$message.error('请填写完整的症状名称和起始日期');
      }
    },
    saveProjectData() {
      if (this.projectForm.name.trim()) {
        this.projectTableData.push({ ...this.projectForm });
        this.dialogVisible = false;
        this.projectForm.name = '';
        this.$message.success('项目保存成功');
      } else {
        this.$message.error('项目名称不能为空');
      }
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    deleteProject(index) {
      this.projectTableData.splice(index, 1);
    },
    goTo4() {
      this.$router.push('/recommend1'); // 使用 $router.push 进行路由跳转
    },
  },
};
</script>

<style scoped>
.el-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f0f2f5;
  padding: 0 20px;
}

.el-main {
  overflow: auto;
  padding: 20px;
}

.header-style {
  font-size: 20px;
  color: rgba(44, 148, 196, 0.921);
  font-weight: bolder;
}

.container3 {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
  flex-wrap: nowrap; /* 强制不换行 */
  width: 100%; /* 确保容器宽度足够 */
  margin-left: 100px;
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

.container {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 800px;
  height: 60px;
  margin-left: 100px;
  margin-top: 10px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
}

.custom-divider {
  border-color: dodgerblue;
  height: 4px;
}

.button1 {
  margin-right: 10px;
}

.button-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  width: 100%; /* 确保占满整个父容器宽度 */
  margin-top: 20px; /* 与上一个元素的间距 */
}

.button4 {
  background-color: rgb(243, 160, 43);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 20px;
}

.button4:hover {
  background-color: rgb(243, 160, 43); 
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>