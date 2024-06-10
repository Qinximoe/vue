<template>
  <div style="padding-left: 0px;" >修改访客页面</div>
<div>
  出发时间：  
  <input type="text" v-model="inpt.interTime">   
  结束时间
  <input type="text" v-model="inpt.leaveTime">   
    <el-button style="width: 50px;" @click="edit" type="danger">修改</el-button>
</div>
</template>  
<script lang="ts"  setup>
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { Action } from 'element-plus'
  import { reactive, ref ,provide} from 'vue';
  import axios from 'axios';
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
  const props=defineProps(['init'])
  console.log(props)
  const inpt=reactive({
    interTime:"",
    leaveTime:""
  })
  const updateRepair=()=>{
    axios.get('http://127.0.0.1/list/updateVisitor',{
        params: {
          interTime:inpt.interTime,
          leaveTime:inpt.leaveTime,
          id:props.init.id 
        }
      }).then(res=>{
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    }
  
  const edit=()=>{
    updateRepair()
    open("修改成功  ")
  }
</script>
<style scoped>
  div{
    margin-top: 100px;
    display: flex;
    flex-direction: row;

  }
  input{
    height: 30px;
    width: 300px;
    border-radius: 20px;
  }
</style>