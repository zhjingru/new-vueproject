<script setup>
import { Delete } from '@element-plus/icons-vue';
import { ref, computed } from 'vue';
import { useRouter, useMessage } from 'vue-router';

const router = useRouter();
const message = useMessage();

const tableData = ref([]);
const medicalHistory = ref("");
const currentSymptoms = ref("");
const previousChecks = ref("");
const recommendedChecks = ref([]);
const dialogFormVisible = ref(false);
const form = ref({
  name: '',
  date: null,
});
const dialogVisible = ref(false);
const projectForm = ref({
  name: '',
});
const projectTableData = ref([]);

const formattedMonth = computed(() => {
  return formatMonth(form.value.date);
});

const handleAdd = () => {
  form.value = {};
  dialogFormVisible.value = true;
};

const goTo2 = () => {
  router.push("/src/views/project.vue");
};

const goTo3 = () => {
  router.push("/src/views/accepted.vue");
};

const goTo4 = () => {
  router.push("/src/views/recommend.vue");
};

const saveFormData = () => {
  if (form.value.name && form.value.date) {
    tableData.value.push({ ...form.value });
    dialogFormVisible.value = false;
    form.value.name = '';
    form.value.date = null;
  } else {
    message.error('请填写完整的症状名称和起始日期');
  }
};

const handleClose = (done) => {
  form.value.name = '';
  form.value.date = null;
  done();
};

const formatMonth = (date) => {
  if (date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }
  return '';
};

const deleteRow = (index) => {
  tableData.value.splice(index, 1);
};

const saveProjectData = () => {
  if (projectForm.value.name.trim()) {
    projectTableData.value.push({ ...projectForm.value });
    dialogVisible.value = false;
    projectForm.value.name = '';
  } else {
    message.error('项目名称不能为空');
  }
};

const deleteProject = (index) => {
  projectTableData.value.splice(index, 1);
};
</script>

<template>
        <el-main>
          
          <div class="container">
            <div class="container1">
              <div class="textA">
                <p :style="textA" style="color: dodgerblue; text-decoration-line: underline">
                  填写您的历史医疗信息
                </p>
                <el-divider class="custom-divider"></el-divider>
              </div>
              <div class="textA">
                <p :style="textA" style="color: lightslategray; text-decoration-line: underline">
                  生成推荐检查项目
                </p>
                <el-divider ></el-divider>
              </div>
            </div>

            <div class="medical-recommendation">
              <form @submit.prevent="handleSubmit">
                <div class="box" style="border-radius: 10px; margin-bottom: 0px;margin-left: 20px;">
                  <div class="text1">当前症状</div>
                  <button class="button1" @click="dialogFormVisible = true">添加</button>
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
                            <!-- 确保你有一个名为 Delete 的图标组件 -->
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
                  <div class="text1">已接受过的检查项目</div>
                  <button class="button1" @click="dialogVisible = true">添加</button>
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
                            <!-- 确保你有一个名为 Delete 的图标组件 -->
                            <Delete />
                          </el-icon>
                        </el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </form>
              <el-button class="button4" style="margin-top: 0px; " @click="goTo4">下一步</el-button>
            </div>
           
          </div>
        </el-main>
</template>

<style scoped>
.container1 {
  display: flex;
  width: 80%;
  margin-bottom: 20px;
}

.textA,
.textB {
  flex: 1;
}

.textA {
  margin-right: 10px;
  font-size: 20px;
}

.textB {}

.medical-recommendation {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  /* background-color: #eaeaea; */
  border-radius: 8px;
}

.box {
  border: 1px;
  padding: 10x;
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

  border-color:dodgerblue; 
  color: aqua;
  
  height: 4px; /* 默认是 1px，这里设置为 4px 以加粗 */
 
}

.button1 {
  margin-right: 10px;
}

.button4 {
  margin-top: 20px;
  background-color: coral;
  width: 100px;
  height: 40px;
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