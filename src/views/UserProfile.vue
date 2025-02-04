<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header-style">|  用户个人信息管理</el-header>
      <el-container>
        <el-main>
          <el-form :model="form" label-width="auto" style="max-width: 600px">
            <!-- 姓名和年龄在同一行 -->
            <el-row :gutter="100">
              <el-col :span="12">
                <el-form-item label="姓名">
                  <el-input v-model="form.name" />
                  <template #label="{ label }">
                    <span>{{ label }}<span class="required">*</span></span>
                  </template>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="年龄">
                  <template #label="{ label }">
                    <span>{{ label }} <span class="required">*</span></span>
                  </template>
                  <el-input v-model="form.age" type="number" />
                </el-form-item>
              </el-col>
            </el-row>

            <!-- 邮箱和电话在同一行 -->
            <el-row :gutter="100">
              <el-col :span="12">
                <el-form-item label="邮箱">
                  <el-input v-model="form.email" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="电话">
                  <el-input v-model="form.number" />
                </el-form-item>
              </el-col>
            </el-row>

            <!-- 性别 -->
            <el-form-item label="性别">
              <el-radio-group v-model="form.resource">
                <el-radio value="Sponsor">女</el-radio>
                <el-radio value="Venue">男</el-radio>
              </el-radio-group>
            </el-form-item>

            <div class="separator"></div> <!-- 添加分隔线 -->

            <form @submit.prevent="onSubmit">
              <div class="box" style="border-radius: 10px; margin-bottom: 10px;margin-left: 20px;width: 780px;">
                <div class="text1" >既往病史</div>
                <button class="button1" @click="handleAdd">添加</button>
              </div>

              <el-dialog v-model="dialogFormVisible" title="请输入病症的详细信息：" width="500" :before-close="handleClose">
                <el-form :model="form1" label-width="100px" label-position="right" style="padding-right: 40px;">
                  <el-form-item label="病症名称" :label-width="formLabelWidth">
                    <el-input v-model="form1.name" autocomplete="off" />
                  </el-form-item>
                  <el-form-item label="起始日期" :label-width="formLabelWidth">
                    <div class="block">
                      <el-date-picker v-model="form1.date" type="month" placeholder="选择月" :locale="zhCn"></el-date-picker>
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
                <el-table :data="tableData" style="width: 100%" max-height="200">
                  <el-table-column prop="name" label="病症名称" width="270"></el-table-column>
                  <el-table-column prop="date" label="起始日期" width="300"></el-table-column>
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

            <el-form-item class="button-center">
              <el-button type="primary" @click="onSubmit">保存并更新</el-button>
            </el-form-item>

          </el-form>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const form = reactive({
  name: '',
  email: '',
  number: '',
  age: '',
  resource: '',
  desc: '',
});

const form1 = reactive({
  name: '',
  date: null,
});

const tableData = ref([]);

const dialogFormVisible = ref(false);
const formLabelWidth = ref('100px');

const handleAdd = () => {
  form1.name = '';
  form1.date = null;
  dialogFormVisible.value = true;
};

const saveFormData = () => {
  if (form1.name && form1.date) {
    tableData.value.push({ ...form1 });
    dialogFormVisible.value = false;
  } else {
    ElMessage.error('病症名称和起始日期不能为空');
  }
};

const deleteRow = (index) => {
  tableData.value.splice(index, 1);
};

const handleClose = (done) => {
  form1.name = '';
  form1.date = null;
  done();
};

const onSubmit = () => {
  ElMessage.success('表单已成功提交');
  console.log('Form submitted:', form);
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

.separator {
  border-bottom: 1px solid #ddd; 
  margin: 10px 0; 
  width: 1100px;
}

.button-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 500px;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f2f5;
  border-radius: 10px;
  margin-bottom: 10px;
}

.button1 {
  padding: 10px 20px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.header-style {
  font-size: 20px;
  color: rgba(44, 148, 196, 0.921);
  font-weight: bolder;
}

.required {
  color: red;
  margin-left: 5px;
}

.el-form-item {
  margin-bottom:40px; /* 增加表单项之间的间距 */
}
</style>