<template >
  <div class="main">
    <div class="img">
      <h1 style="color: orange">快递员登录</h1>
    </div>
    <div class="count">
      <img src="账号.jpg">
      <span>&nbsp;&nbsp;&nbsp;</span>
      <el-input style="border-radius: 20px;" v-model="input" placeholder="Please input" />
    </div>
    <div class="passwd">
      <img src="密码.jpg">
      <span>&nbsp;&nbsp;&nbsp;</span>
      <el-input style="border-radius: 20px;" v-model="input" placeholder="Please input" />
    </div>

    <div class="ask">
      <span>我已阅读<strong>"用户协议"</strong>与<strong>"隐私政策"</strong></span>
    </div>
    <div class="login">
      <el-button type="primary" plain>
        <router-link to="/home/student">确定</router-link>
      </el-button>

      <el-button type="danger" plain>重置</el-button>
    </div>




  </div>
</template>
<script setup>

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
  background-image: url('./icons/123.jpg');
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
