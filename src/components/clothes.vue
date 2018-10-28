<template>
 <div id="app">
<mheader>服装</mheader>
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
