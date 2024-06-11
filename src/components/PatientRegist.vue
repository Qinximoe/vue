<template>

  <span style="text-align: center;color: aquamarine;position: relative;left: 460px;font-weight: bold;">病人信息注册</span>
  <div class="main">
    <el-form label-width="120px">
      <el-form-item label="患者唯一标识">
      <el-input v-on:blur="checkaccout" v-model="input.PatientID" />
    </el-form-item>
    <el-form-item label="患者姓名">
      <el-input v-model="input.Name" />
    </el-form-item>
    <el-form-item label="患者性别(M/F)">
      <el-input v-model="input.Gender" />
    </el-form-item>
    <el-form-item label="出生日期">
      <el-col :span="15">
        <el-date-picker
          v-model="input.BirthDate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="input.Phone" />
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="input.Address" />
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="input.Account" />
    </el-form-item>
  </el-form>
  <el-form-item label="密码">
      <el-input v-on:blur="checkpasswd" v-model="input.Password"/>
  </el-form-item>
  <el-form-item label="确认密码">
      <el-input v-on:blur="checkpasswd" v-model="passwd2"/>
  </el-form-item>
  <div class="login">
    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <el-button @click="yes()" type="primary">确定</el-button>
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
const show=()=>{
  console.log(input.Account)
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
//学生信息
const input = reactive({
  PatientID:"",
  Name:"",
  Gender:"",
  BirthDate:"",
    Phone:"",
    Address:"",
    Account:"",
    Password:"",
    array:[]//查询中接收所有数据
  })
  const passwd2=ref("")
  const formData = reactive([]);
//重置按钮
  const clear=()=>{
    input.PatientID=""
    input.Name=""
    input.Gender=""
    passwd2.value=""
    input.Phone=""
    input.BirthDate=""
    input.Address=""
    input.Account=""
    input.Password=""
  }
  //查询所有
  const all=()=>{
    axios.get('http://127.0.0.1/list/all').then(res=>{
      input.array=res.data
      console.log(res.data)
    }).catch(err=>{
      console.log("获取数据失败"+err)
    })

  }
  //添加
  const add=()=>{

    axios.get('http://127.0.0.1/list/add',{

        params:{
          PatientID:input.PatientID,
          Name:input.Name,
          Gender:input.Gender,
          BirthDate:input.BirthDate,
          Address:input.Address,
          Account:input.Account,
          Password:input.Password
        }
      }).then(res=>{

        if(res.data.status==200){
          all()
        }
      }).catch(err=>{
        all()
        console.log("操作失败"+err)
      })
  }
  //确定按钮
    const yes=()=>{
      if(input.PatientID==""||input.Name==""||input.Gender==""||input.BirthDate==""||input.Phone==""||input.Account==""||input.Address==""||input.Password==""){
        open("不能为空")
      }
      else if(checkaccout()&&checkpasswd()&&checkroom()){
          add()
          open("注册成功！")
           // 将表单数据添加到formData数组中
          formData.push();
          // 输出formData数组到终端上
          console.log(formData);
        }
      else{
        open("然有错误")
      }
    }
  //学号
  const checkaccout=()=>{
    const accout=input.PatientID
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
  //宿舍号
  const checkroom=()=>{
    const room=input.BirthDate
    if(/^[\d]+$/.test(room)==false){
      open("病房号格式错误：应全为数字")
      return 0;
    }
    else if(room.length!=3){
      open("病房号格式错误：长度应为3位")
      return 0;
    }
    return 1
  }
  //密码
  const checkpasswd=()=>{
    const pd=({
      one:input.Password,
      two:passwd2.value
    })
    if(pd.one!=pd.two){
      open("新密码与确认密码不一致")
      return 0;
    }
    return 1
  }
</script>
<style scoped>
  .main{
    padding: 0px;
    padding-left: 300px;
  }
</style>
