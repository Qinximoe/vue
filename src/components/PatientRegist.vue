<template>

  <span style="text-align: center;color: aquamarine;position: relative;left: 460px;font-weight: bold;">病人信息注册</span>
  <div class="main">
    <el-form label-width="120px">
      <el-form-item label="Activity 病床号">
      <el-input v-on:blur="checkaccout" v-model="input.accout" />
    </el-form-item>
    <el-form-item label="Activity 名字">
      <el-input v-model="input.name" />
    </el-form-item>
    <el-form-item label="Activity 楼层">
      <el-input v-model="input.dorm" />
    </el-form-item>
    <el-form-item label="Activity 病房号">
      <el-input v-on:blur="checkroom" v-model="input.room" />
    </el-form-item>

    <el-form-item label="Activity取药时间">
      <el-col :span="15">
        <el-date-picker
          v-model="input.time"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="input.department" placeholder="选择病因">
        <el-option label="发烧" value="发烧" />
        <el-option label="流行性感冒" value="流行性感冒" />
        <el-option label="鼻炎" value="鼻炎" />
      </el-select>
    </el-form-item>
    <el-form-item  label="性别">
      <el-radio-group v-model="input.sex">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>
  </el-form>
  <el-form-item label="Activity 密码">
      <el-input v-on:blur="checkpasswd" v-model="input.passwd"/>
  </el-form-item>
  <el-form-item label="Activity 确认密码">
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
  console.log(input.department)
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
    accout:"",
    name:"",
    dorm:"",
    room:"",
    time:"",
    department:"",
    sex:"",
    passwd:"",
    array:[]//查询中接收所有数据
  })
  const passwd2=ref("")
  const formData = reactive([]);
//重置按钮
  const clear=()=>{
    input.accout=""
    input.name=""
    input.dorm=""
    passwd2.value=""
    input.time=""
    input.room=""
    input.sex=""
    input.department=""
    input.passwd=""
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
          accout:input.accout,
          name:input.name,
          dorm:input.dorm,
          room:input.room,
          time:"2021-09-01",
          department:input.department,
          sex:input.sex,
          passwd:input.passwd
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
      if(input.accout==""||input.name==""||input.dorm==""||input.room==""||input.time==""||input.department==""||input.sex==""||input.passwd==""){
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
    const accout=input.accout
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
    const room=input.room
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
      one:input.passwd,
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
