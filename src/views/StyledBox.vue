<template>
    <div class="container3">
      <div class="arrow-box green" style="font-size: 23px;">
        <div style="margin-top: 12px;"><strong>填写您的历史医疗信息</strong></div>
        
      </div>
      <div class="arrow-box gray"  style="font-size: 23px; ">
        <div style="margin-top: 12px;"><strong>生成推荐检查项目</strong></div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StyledBox',
  };
  </script>
  
  <style scoped>
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
  
  /* 灰色框的箭头 */
  
  </style>