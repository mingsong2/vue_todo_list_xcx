<template>
    <div>个人中心</div>
</template>

<script>
import {get} from '../util'

export default {
    async created(){
        const res = await get('/weapp/demo')
        console.log(res)
        console.log('小程序启1221动了');
    }
}
</script>

<style>

</style>

