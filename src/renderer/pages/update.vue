<template>
  <div class='div-import' v-loading="loading" :element-loading-text="loading">
    <br/>
    <br/>
    <el-button type="primary" :loading="true" class="btn-import">添加文件</el-button>
    <br/>
    <br/>
    <el-button type="primary" :loading="true" class="btn-import">更新FT文件</el-button>
    <br/>
    <br/>
    <el-button type="primary" :loading="true" class="btn-import">更新CP文件</el-button>
  </div>
</template>

<script lang="js">
  export default {
    name: "index"
  }
</script>

<style scoped>

  .div-import {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .btn-import {
    width: 20%;


  }

</style>