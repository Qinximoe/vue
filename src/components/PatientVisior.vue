<template>
  <span style="text-align: center;color: aquamarine;position: relative;left: 460px;">访客登记</span>
  <div class="main">
    <el-form label-width="120px">
      <el-form-item label="Activity 病床号">
      <el-input v-on:blur="checkaccout()" v-model="input.id"/>
    </el-form-item>
    <el-form-item label="Activity 名字">
      <el-input v-model="input.name"  />
    </el-form-item>
    <el-form-item label="Activity 身份证    ">
      <el-input  v-model="input.number"/>
    </el-form-item>
  </el-form>
  <el-form-item label="Activity 进入时间">
      <el-input v-on:blur="checkdate1" v-model="input.interTime" aria-placeholder="xxxx-xx-xx" />
  </el-form-item>
  <el-form-item label="Activity 离开时间">
      <el-input v-on:blur="checkdate2" v-model="input.leaveTime" aria-placeholder="xxxx-xx-xx" />
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
    id:"",
    name:"",
    number:"",
    interTime:"",
    leaveTime:"",
    array:[]//查询中接收所有数据
  })
  const passwd2=ref("")
//确定
const addVisitor=()=>{
  axios.get('http://127.0.0.1/list/addVisitor',{
    params:{
        id:input.id,
        name:input.name,
        number:input.number,
        interTime:input.interTime,
        leaveTime:input.leaveTime,
        array:[]
    }
}).then(res=>{
    console.log(res.data)
}).catch(err=>{
    console.log("操作失败！")
})
}
const primary=()=>{
  if(input.id==""||input.name==""||input.number==""||input.interTime==""){
        open("不能为空")
      }
      else if(checkaccout()&&checkdate1()&&checkdate2()){
          addVisitor()
          open("注册成功！")
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
    input.id=""
    input.name=""
    input.number=""
    input.interTime=""
    input.leaveTime=""
  }
    //学号
    const checkaccout=()=>{
    const accout=input.id
    if(/^[\d]+$/.test(accout)==false){
      open("病床号格式错误：应全为数")
      return 0;
    }
    else if(accout.length!=9){
      open("病床号格式错误：长度应为9位")
      return 0;
    }
    return 1
  }
  //日期
    const checkdate1=()=>{
      const date1=input.interTime;
      if(/[\d]{4}[-][01][\d][-][0123][\d]/.test(date1)==false){
        open("日期格式错误，要求：xxxx-xx-xx（2022-01-01）")
        return 0;
      }
      return 1;
    }
    const checkdate2=()=>{
      const date1=input.leaveTime;
      if(/[\d]{4}[-][01][\d][-][0123][\d]/.test(date1)==false){
        open("日期格式错误,求：xxxx-xx-xx（2022-01-01）")
        return 0;
      }
      return 1;
    }
</script>
<style scoped>
  .main{
    padding: 0px;
    padding-left: 300px;
    padding-top: 100px;
  }

</style>
