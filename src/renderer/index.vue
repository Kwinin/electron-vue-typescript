<template>
  <div>
    <el-row>
      <el-row>
        <el-col :span="4">
          <el-menu mode="vertical" router :default-active="route" unique-opened>

            <el-menu-item index="update-page">更新操作</el-menu-item>
            <el-menu-item index="add-page">添加公司</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        route: this.$route.path.replace('/','')
      }
    }
  }
</script>

<style scoped>

</style>
