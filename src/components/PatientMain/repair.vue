<template>
    <el-table  :data="input.array" style="width: 100%">
      <el-table-column prop="CourierID" label="CourierID" width="160" />
      <el-table-column prop="Name" label="Name" width="230" />
      <el-table-column prop="Department" label="Department" width="230" />
      <el-table-column prop="Phone" label="Phone" width="310" />
      <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope" slot-scope="scope">
        <el-button ref="del" link type="primary" size="small" @click="dlt(scope.row)"
          >Detail</el-button
        >
        <el-button link type="primary" size="small" @click="edit(scope.row),input.boolean=true" >Edit</el-button>
      </template>
    </el-table-column>
    </el-table>
    <repairEdit :init=input.aw v-if="input.boolean"></repairEdit>
  </template>
  <script lang="ts" setup>
  import repairEdit from './repairEdit.vue'
  import axios from 'axios';
  import { inject ,ref, reactive,shallowRef,defineProps} from 'vue';
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { Action } from 'element-plus'
  //定义数据
  const props=defineProps(['text']);
  const input=reactive({
    array:[],
    g:"",
    h:"",

    aw:[],
    boolean:false
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
  //获取所有物品报修信息
  const getAll=()=>{
    axios.get('http://127.0.0.1/list/searchRepair',{
    params:{
      id:props.text
    }
    }).then(res=>{
    input.array=res.data
    console.log(res.data)
    }).catch(err=>{
    console.log(err.message+"错误")
    })
  }
  getAll()
  //
  const del=()=> {    //删除操作
      axios.get('http://127.0.0.1/list/delRepair',{
        params: {
          thing: input.g,
          reason: input.h
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
    input.g=id.thing
    input.h=id.reason
    del()
    open("删除成功")
  }
  //修改
  const edit=(arrays)=>{
    input.aw=arrays
  }
  </script>
  