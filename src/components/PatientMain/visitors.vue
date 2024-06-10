<template>
    <el-table :data="input.array" style="width: 100%">
      <el-table-column fixed prop="DocterID" label="DocterID" width="180" />
      <el-table-column prop="Name" label="N ame" width="150" />
      <el-table-column prop="Department" label="Department" width="150" />
      <el-table-column prop="Phone" label="Phone" width="230" />
      <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope" slot-scope="scope">
        <el-button link type="primary" size="small" @click="dlt(scope.row)"
          >Detail</el-button
        >
        <el-button link type="primary" @click="edit(scope.row),input.boolean=true" size="small">Edit</el-button>
      </template>
    </el-table-column>
    </el-table>
    <visitorsEdit :init=input.aw v-if="input.boolean"></visitorsEdit>
  </template>
  
  
  <script lang="ts"  setup>
  import visitorsEdit from "./visitorsEdit.vue"
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { Action } from 'element-plus'
  import axios from 'axios';
  import { inject , reactive,defineProps} from 'vue';
  const props=defineProps(['text']);
  const input=reactive({
    array:[],
    interTime:"",
    leaveTime:"",

    boolean:false,
    aw:[]
  })
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
  axios.get('http://127.0.0.1/list/searchVisitors',{
    params:{
      id:props.text,
    }
  }).then(res=>{
    input.array=res.data
    console.log(res.data[0])
  }).catch(err=>{
    console.log(err.message+"错误")
  })
  //
  const del=()=> {    //删除操作
      axios.get('http://127.0.0.1/list/delVisitor',{
        params: {
          interTime:input.interTime,
          leaveTime:input.leaveTime
        }
      }).then(res=>{
          // console.log(res.data);
          if(res.data.status == 200) {
          }
      }).catch(err=>{
          console.log("操作失败" + err);
      })
    }
  const dlt=(id)=>{
    input.leaveTime=id.leaveTime
    input.interTime=id.interTime
    del()
    open("删除成功")
  }
  //修改
  const edit=(arrays)=>{
    input.aw=arrays
  }
  </script>
  