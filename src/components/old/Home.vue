<template>
  <div class="details">
    <div class="aside">
      aside
    </div>
    <div class="main">
      main
    </div>
  </div>
  
</template>
<script lang="ts" setup>
</script>
<style scoped>
div{
  border:  1px solid green;
}
  .details{
    display: flex;
    flex-direction: row;
  }
  .aside{
    width: 12%;
    border-color: orange;
    height: 570px;
  }
  .main{
    width: 90%;
    border-color: blue;
    height: 570px;
  }
</style>
