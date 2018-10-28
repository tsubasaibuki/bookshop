<template>
 <div id="app">
<MHeader>收藏夹</MHeader>
<ul class="content">
    <li v-for="l in cartList">
        <img :src="l.bookCover" alt ="">
        {{l.bookName}}
    
        <button>删除</button>
        </li>
      
    </ul>
 </div>
</template>

<script>
import MHeader from '../base/MHeader.vue';
//辅助函数 语法糖
import {mapState,mapGetters} from 'vuex'
export default {

 data() {
 return {}
 },
 methods:{},
 computed:{
    ...mapState(['cartList']),
    //cartList(){return this.$store.state.cartList}
    ...mapGetters(['count'])
 },
 components: {MHeader},
}
</script>

<style scoped>
img{
    height:12.25rem;
    width:12.25rem;
    max-height:100%;
    max-width:100%;
}
</style>
