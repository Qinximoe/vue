<template>
    <div class="details">
    <div class="aside">
      登入
      <hr>
      注册
    </div>
    <div class="main">
      病人登录注册页面
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
div{
    border:3px solid black;
    
  }
.details{
    display: flex;
    flex-direction: row;
  }
    .aside{
    width: 12%;
    border-color: orange;
    height: 570px;
    text-align: center;
    
  }
  .main{
    width: 90%;
    border-color: blue;
    height: 570px;
  }
</style>