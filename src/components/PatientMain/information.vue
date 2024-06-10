<template>
  
    <el-table :data="input.array" style="width: 100%">
      <el-table-column fixed prop="PatientID" label="PatientID" width="150" />
      <el-table-column prop="Name" label="Name" width="120" />
      <el-table-column prop="Gender" label="Gender" width="120" />
      <el-table-column prop="BirthDate" label="BirthDate" width="120" />
      <el-table-column prop="Phone" label="Phone" width="120" />
      <el-table-column prop="Address" label="Address" width="120" />
      <el-table-column prop="Account" label="Account" width="120" />
      <el-table-column prop="Password" label="Password" width="200" />
    </el-table>
  </template>
  
  
  <script  setup>
  import axios from 'axios';
  import { inject , reactive,defineProps,toRefs} from 'vue';

  const props=defineProps(['text']);
  const input=reactive({
    array:[]
  })
  const handleClick = () => {
    console.log('click')
  }

  axios.get('http://127.0.0.1/list/search',{
    params:{
      accout:props.text
    }
  }).then(res=>{
    input.array=res.data
    console.log(res.data[0])
  }).catch(err=>{
    console.log(err.message+"错误")
  })
  </script>
  