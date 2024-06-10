<template>
    <div class="main">
      <div class="img">
        <h1 style="color: rgb(76, 196, 247);">病人登录</h1>
      </div>
      <div class="count">
        <img src="账号.jpg">
        <span>&nbsp;&nbsp;&nbsp;</span>
        <el-input style="border-radius: 20px;" v-model="input.accout" placeholder="Please input" />
      </div>
      <div class="passwd">
        <img src="密码.jpg">
        <span>&nbsp;&nbsp;&nbsp;</span>
        <el-input style="border-radius: 20px;" v-model="input.passwd" placeholder="Please input" />
      </div>

      <div class="ask">
        <span>我已阅读<strong>"用户协议"</strong>与<strong>"隐私政策"</strong></span>
      </div>
      <div class="login">
        <el-button v-on:click="primary()" type="primary" plain>
          确定
        </el-button>

        <el-button v-on:click="" type="danger" plain>重置</el-button>
      </div>
    </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { reactive, ref ,provide} from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

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
  const input =reactive({
    accout:"",
    passwd:"",
    array:[],
    boolean:2
  })
  provide('ac',"23423")
  //登入
  const primary=()=>{
    // axios.get('http://127.0.0.1/list/all').then(res=>{
    //   input.array=res.data;
    // }).catch(err=>{
    //   console.log(err.mesage+"错误")
    // })
    // for(const i=ref(0);i.value<=input.array.length-1;i.value++){
    //   if(input.accout==input.array[i.value].accout && input.passwd==input.array[i.value].passwd){
    //     open("登入成功")
    //     input.boolean=1;
    //     router.push({ path:'/home/student/search',query:{value:input.accout}})
    //     return 1;
    //   }
    // }
    // if(input.boolean==0){
    //   open("账号或者密码错误")
    // }
    // input.boolean=0
    router.push({ path:'/home/student/search',query:{value:input.accout}})
  }
  //查找所有
  const all=()=>{
    axios.get('http://127.0.0.1/list/all').then(res=>{
      input.array=res.data;
      console.log(input.array)
    }).catch(err=>{
      console.log(err.mesage+"错误")
    })
  }
  const login=()=>{





  }
</script>
<style scoped>
  span{
    font-size: 10px;
  }
  img{
    width: 30px;
    height: 30px;
  }
  div{
    border:1px solid none
  }
  .main{
    border:  1px solid none;
    width: 1075px;
    height: 570px;
    background-image: url('./icons/300.jpg');
    background-size: cover;
    background-position: center;
  }
  .count,.img,.passwd,.ask,.login{
    display: flex;
    width: 25%;
    margin: auto;
    margin-top: 70px;
  }
  .img{
    flex-direction: column;
    text-align: center;
  }
  .count{
    flex-direction: row;
  }
  .passwd{
    margin-top: 20px;
    flex-direction: row;
  }
  .ask{
    padding-left: 100px;
    margin-top: 5px;
  }
  .login{
    margin-top: 30px;
    padding-left: 150px;
  }
</style>
