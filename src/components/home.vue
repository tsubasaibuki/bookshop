<template>
 <div>
<mheader>首页</mheader>
<div class="content">
    <loading v-if="loading"></loading>
    <template v-else>
<Swiper :swiperSlides="sliders">
</Swiper>
<div class="container">
    <h3>热门栏目</h3>
    <ul>
         <router-link to="/man" tag="li"><h2>男星</h2>
         <img src="../pic/pi16.jpeg">
             </router-link>
                     <router-link to="/woman" tag="li"><h2>女星</h2>
             <img src="../pic/1.jpg">           
             </router-link>
                     <router-link to="/clothes" tag="li"><h2>服装</h2>
                        <img src="../pic/6.jpg">
             </router-link>
                     <router-link to="/cartoon" tag="li"><h2>漫画</h2>
                        <img src="../pic/pi10.jpg">
             </router-link>
           
    </ul>
 
    </div>
<div class="container">
<div class="line"> </div>

<h3>热门图书</h3>
<div class="line"> </div>
<ul>
<li v-for=" hot in hotBooks">
    <img :src="hot.bookCover">
    <b>{{hot.bookName}}</b>

    </li>
    </ul>
        <div class="line"> </div>
    </div>
    </template>
</div>

 </div>
</template>

<script>
import mheader from "../base/mheader.vue";
import Swiper from "../base/swiper.vue";
import {getAll} from '../api'
import loading from '../base/loading.vue'
import man from './man.vue'
export default {

name:"app",
created(){
  this.getData();
},

 data() {
 return {
     sliders: [],
     hotBooks:[],
     loading:true,
     columns:[
         {name:"男星",pic:require("../pic/pi16.jpeg"),id:"man"},
         {name:"女星",pic:require("../pic/1.jpg"),id:"girl"},
         {name:"服装",pic:require("../pic/6.jpg"),id:"clothes"},
         {name:"漫画",pic:require("../pic/pi10.jpg"),id:"cartoon"}
         ],
     

 }
 },
 methods:{
     async getData(){
    let [sliders,hotBooks] = await getAll(); //[]
    this.sliders = sliders;
    this.hotBooks = hotBooks;
    this.loading = false;
   }
 },
 computed:{},
 components: { mheader,Swiper,loading},
}

</script>
<style scoped lang="less">
h3{
    color:#999;padding: 5px 0
}
.container{
    width:100%;
    margin:0 auto;
    ul{
        display:flex;
        flex-wrap:wrap;/* 默认换行*/
        li{
            width:24%;
            
            text-align: center;
            margin:.125rem;
            img{width:100%;}
        }
    }
}

</style>


