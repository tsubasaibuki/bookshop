<template>
 <div id="app">
<mheader>漫画</mheader>
 <div class="content" ref="scroll">
     <!--scrollTop + 元素.clientHeight +20 ==元素.scrollHeight -->
     <ul>
         <router-link v-for= "(book,index) in books" 
         :to="{name:'detail',params:{bid:book.bookId}}"
         :key="index" tag="li">
         
             <img v-lazy="book.bookCover">
              {{book.bookName}}
        
             </router-link>
         </ul>
       
     </div>
 </div>
</template>

<script>
import mheader from '../base/mheader.vue'
import {pagination,removeBook,getcartoon} from '../api'
import * as Types from '../store/mutations-types'
export default {

name:"app",
 data() {
 return {
     books:[], 

 }
 },
 created() {
      this.getData();
 },
 methods:{
        async  getData(){
  
    
      
      this.books = await getcartoon()  //获取的书放到书的属性上   

       

     }
 },
 computed:{},
 components: {mheader},
}
</script>

<style scoped>
img{
    max-height:100%;
    max-width:100%;
    height:9.375rem;
    width:9.375rem;
}
</style>
