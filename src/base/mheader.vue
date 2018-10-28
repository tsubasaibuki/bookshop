<template>
 <div class="header">
   <slot></slot>
     <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
 </div>
</template>

<script>
export default {

name:"app",
props:{
  back:{type:Boolean,
        default:false}
},
 data() {
 return {}
 },
 methods:{
     goback(){
         this.$router.go(-1)
     }
 },
 computed:{},
 components: {},
}
</script>

<style scoped lang="less">
.header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background:#afd9ee;
    height:2.5rem;
    text-align: center;
    line-height:2.5rem;
    font-weight:bold;
    i{
        position:absolute;
        left:.625rem;
        font-size:1.25rem;
    }
}
</style>
