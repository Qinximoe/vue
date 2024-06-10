<template>
  <div style="padding-left: 0px;" >正在修改当前药品为{{ props.init.thing }}的选择原因:  </div>
<div>
  登记原因：  
  <input type="text" v-model="inpt.reason">   
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
  const inpt=reactive({
    reason:""
  })
  const updateRepair=()=>{
    console.log(props.init.reason)
    axios.get('http://127.0.0.1/list/updateRepair',{
        params: {
          reason: inpt.reason,
          thing: props.init.thing
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