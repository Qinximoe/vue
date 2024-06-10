<template>
    <span style="text-align: center;color: aquamarine;position: relative;left: 460px;">药品选择</span>
    <div class="main">
      <el-form label-width="120px">
        <el-form-item label="Activity 病房号">
        <el-input v-on:blur="checkaccout()" v-model="input.accout" placeholder="请输入病房号"/>
      </el-form-item>
      <el-form-item label="Activity 楼层">
        <el-input v-model="input.room"  placeholder="请输入楼层"/>
      </el-form-item>
      <el-form-item label="Activity 药品名    ">
        <el-input  v-model="input.thing" placeholder="请输入药品名"/>
      </el-form-item>
    </el-form>
    <el-form-item label="Activity 用法用量">
        <el-input v-model="input.reason" placeholder="请输入用法用量" />
    </el-form-item>
    <div class="login">
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <el-button v-on:click="primary()"  type="primary">确定</el-button>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <el-button type="danger" v-on:click="clear()" plain>重置</el-button>
      </div>
    </div>
  </template>
  <script lang="ts" setup>

  import { reactive,ref } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { Action } from 'element-plus'
  import axios from 'axios';
  //访客信息
  const input=reactive({
      accout:"",
      room:"",
      thing:"",
      reason:"",
      array:[]//查询中接收所有数据
    })
    const passwd2=ref("")
  //确定
  const addRepair=()=>{
    axios.get('http://127.0.0.1/list/repair',{
      params:{
          id:input.accout,
          room:input.room,
          thing:input.thing,
          reason:input.reason,
      }
  }).then(res=>{
      console.log(res.data)
  }).catch(err=>{
      console.log("操作失败！")
  })
  }
  const primary=()=>{
    if(input.accout==""||input.room==""||input.thing==""||input.reason==""){
          open("不能为空")
        }
        else if(checkaccout()&checkroom()){
            addRepair()
            console.log(input)
            open("查询成功！")
          }
        else{
          open("然有错误")
        }
  }
  //提示窗
  const open = (title) => {
    ElMessageBox.alert(title, '提示', {
      confirmButtonText: 'OK',
      callback: (action: Action) => {
        ElMessage({
          type: 'info',
          message: `action: ${action}`,
        })
      },
    })
  }

  //重置按钮
    const clear=()=>{
      input.accout=""
      input.thing=""
      input.reason=""
      input.room=""
    }
      //学号
      const checkaccout=()=>{
      const accout=input.accout
      if(/^[\d]+$/.test(accout)==false){
        open("病房号格式错误：应全为数")
        return 0;
      }
      else if(accout.length!=9){
        open("病房号格式错误：长度应为9位")
        return 0;
      }
      return 1
    }
     //宿舍号
  const checkroom=()=>{
    const room=input.room
    if(/^[\d]+$/.test(room)==false){
      open("楼层格式错误：应全为数字")
      return 0;
    }
    else if(room.length!=3){
      open("楼层格式错误：长度应为3位")
      return 0;
    }
    return 1
  }
  </script>
  <style scoped>
    .main{
      padding: 0px;
      padding-left: 300px;
      padding-top: 100px;
    }

  </style>
