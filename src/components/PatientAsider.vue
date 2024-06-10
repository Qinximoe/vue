<template>
    <div class="aside">
      <el-row class="tac">
    <el-col :span="30">
      <h5 class="mb-2"></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
      <el-menu-item index="4">
          <el-icon><document /></el-icon>
          <router-link style="text-decoration: none;color: deepskyblue;" to="/home/student/search"> <span>信息查询</span></router-link>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><location /></el-icon>
          <router-link style="text-decoration: none;color: deepskyblue;"  to="/home/student/repair"><span>药品登记</span></router-link>
        </el-menu-item>

        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <router-link style="text-decoration: none;color: deepskyblue;"  to="/home/student/visitor"><span>访客登记</span></router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
    </div>

</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>
<style scoped>
  .aside{
    border:  1px solid orange;
    width: 135px;
    height: 570px;
  }
</style>
