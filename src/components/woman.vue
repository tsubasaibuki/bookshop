<template>
 <div id="app">
<mheader>女星</mheader>
 <router-view/>
 </div>
</template>

<script>
import mheader from '../base/mheader.vue'
export default {

name:"app",
 data() {
 return {}
 },
 methods:{},
 computed:{},
 components: {mheader},
}
</script>

<style scoped>
</style>
