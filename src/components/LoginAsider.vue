<template>
  <el-row class="tac">
    <el-col :span="30">
      <h5 class="mb-2"></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
      >
      <el-menu-item index="4">
          <el-icon><document /></el-icon>
          <router-link style="text-decoration: none;color: aqua;" to="/home/studentlogin"> <span>登录页面</span></router-link>
        </el-menu-item>
        
        <el-menu-item index="4">
          <el-icon><document /></el-icon>
          <router-link style="text-decoration: none;color: aqua;"  to="/home/studentregist"><span>注册页面</span></router-link>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,   
  Setting,
} from '@element-plus/icons-vue'
</script>