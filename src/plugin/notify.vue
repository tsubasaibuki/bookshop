<template>
 <div class="notify">
 {{msg}}
 </div>
</template>

<script>
export default {

name:"app",
 data() {
 return {msg:"123"}
 },
 methods:{},
 computed:{},
 components: {},
}
</script>

<style scoped>
.notify{
    width:6.25rem;
    height:2.5rem;
    background: rgba(0,0,0,.45);
    border-radius:.9375rem;
    line-height:2.5rem;
    text-align:center;
    color:#fff
}
</style>
