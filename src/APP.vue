<template>
    <div class="header">
      <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      >
      <el-menu-item index="0">
        <img
          style="width: 100px"
          src="https://tse2-mm.cn.bing.net/th/id/OIP-C.7mh2c-oJHc5lBUq71qUs1wHaB4?rs=1&pid=ImgDetMain"
          alt="Element logo"
        />
      </el-menu-item>
      <div class="flex-grow" style="display: flex;;align-items: center;justify-content: center;"><h1 style="color: rgb(105, 164, 226);">线上抓药系统</h1></div>
      <el-menu-item index="1"><router-link to="/" class="a">首页</router-link></el-menu-item>
      <el-menu-item index="2">帮助</el-menu-item>
      <el-menu-item index="0">
        <el-avatar
          src="https://img-qn.51miz.com/Element/00/77/28/21/fd16e36b_E772821_29be78fe.png"
        />
      </el-menu-item>
      
      <el-sub-menu index="2">
        <template #title>登录</template>
        <router-link to="/home/studentlogin" class="a"><el-menu-item index="2-1">病人</el-menu-item></router-link>
        <router-link to="/home/managerlogin" class="a"><el-menu-item index="2-2">快递员</el-menu-item></router-link>
        <router-link to="/home/plumberlogin" class="a"><el-menu-item index="2-3">医师</el-menu-item></router-link>
      </el-sub-menu>
      </el-menu>
    </div>
    
    <div style="display: flex;border: 1px solid green;">
        <div><router-view name="Asider">
        
    </router-view></div>
        <div><router-view name="Main">
        
    </router-view></div>
    </div>
    
  </template>
  <script lang="ts" setup>
  </script>
  <style scoped>
    .header{
      border-color: red;
      height: 80px;
    }
    .flex-grow {
      flex-grow: 1;
    }
    .a{
      text-decoration: none;
    }
  </style>
  