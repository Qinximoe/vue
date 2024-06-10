<template>
    <div>
        <h2 style="text-align: center;color: aquamarine;">病人信息查询页面</h2>
        <span v-on:click="view=information">当前基本信息</span>----
        <span v-on:click="view=repair">确认处方页面</span>----
        <span v-on:click="view=visitors">访客登记信息</span>
    </div>
    <component :is="view" :text="queryValue"/>

    {{ queryValue }}
</template>
<script setup>
    import axios from 'axios';
    import information from './PatientMain/information.vue'
    import repair from './PatientMain/repair.vue'
    import visitors from './PatientMain/visitors.vue'
    import { shallowRef,ref,onMounted,reactive } from 'vue';
import { useRouter,useRoute } from 'vue-router';
    const view=shallowRef(information)
    const id=ref(" ")
    // 使用传递过来的值进行相关操作
    // 在页面创建时获取传递的数据
    const ww=ref(0)

    const route = useRoute();
    // 获取查询参数
    const queryValue = route.query.value;
</script>
<style scoped>
    div{
        width: 1075px;
        border:1px solid white;
        text-align: center;
    }
    span{
        color:aqua
    }
</style>
