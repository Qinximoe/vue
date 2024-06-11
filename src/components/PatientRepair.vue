<template>
    <span style="text-align: center;color: aquamarine;position: relative;left: 460px;">处方登记</span>
    <div class="main">
      <el-form label-width="120px">
        <el-form-item label="处方唯一标识">
        <el-input v-on:blur="checkaccout()" v-model="input.PrescriptionID" placeholder="请输入处方唯一标识"/>
      </el-form-item>
      <el-form-item label="医师唯一标识">
        <el-input v-model="input.DoctorID"  placeholder="请输入医师唯一标识"/>
      </el-form-item>
      <el-form-item label="患者唯一标识">
        <el-input  v-model="input.PatientID" placeholder="请输入患者唯一标识"/>
      </el-form-item>
    </el-form>
    <el-form-item label="开处方日期">
      <el-col :span="15">
        <el-date-picker
          v-model="input.PrescriptionDate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="处方状态">
        <el-input v-model="input.Status" placeholder="请输入处方状态（如：新开，已配制，已完成）" style="width: 350px;"/>
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
      PrescriptionID:"",
      DoctorID:"",
      PatientID:"",
      PrescriptionDate:"",
      Status:"",
      array:[]//查询中接收所有数据
    })
    const passwd2=ref("")
  //确定
  const addRepair=()=>{
    axios.get('http://127.0.0.1/list/repair',{
      params:{
          id:input.PrescriptionID,
          room:input.DoctorID,
          thing:input.PatientID,
          reason:input.PrescriptionDate,
      }
  }).then(res=>{
      console.log(res.data)
  }).catch(err=>{
      console.log("操作失败！")
  })
  }
  const primary=()=>{
    if(input.PrescriptionID==""||input.DoctorID==""||input.PatientID==""||input.PrescriptionDate==""||input.Status==""){
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
      input.PrescriptionID=""
      input.PatientID=""
      input.PrescriptionDate=""
      input.DoctorID=""
      input.Status=""
    }
      //学号
      const checkaccout=()=>{
      const accout=input.PrescriptionID
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
    const room=input.DoctorID
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
