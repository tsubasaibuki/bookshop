<template>
 <div id="app">
<MHeader>推荐书单</MHeader>
 <div class="content" ref="scroll" @scroll="loadMore">
     <!--scrollTop + 元素.clientHeight +20 ==元素.scrollHeight -->
     <ul>
         <router-link v-for= "(book,index) in books" 
         :to="{name:'detail',params:{bid:book.bookId}}"
         :key="index" tag="li">
         
             <img v-lazy="book.bookCover">
             <div>
                 <h4>{{book.bookName}}</h4>
                 <p>{{book.bookInfo}}</p>
                 <br>
                    <button @click.stop="remove(book.bookId)">删除</button><br>
                    <button @click.stop="addCart(book)">添加</button>
             </div>
           
             </router-link>
         </ul>
         <div class="more" @click="more">加载更多</button></div>
     </div>
 </div>
</template>

<script>
import {pagination,removeBook} from '../api'
import MHeader from "../base/mheader"
import * as Types from '../store/mutations-types'
export default {

created(){
    this.getData();
},
 data() {
     //offset代表的是偏移量， hasMore是否有更多。默认不是在加载
 return {books:[],
         offset:0,
         hasMore:true,
         isloading:false,}
 },
 methods:{
     addCart(book){
       this.$store.commit(Types.ADD_CART,book)
     },
  async remove(id){
   await removeBook(id);
   this.books = this.books.filter(item=>item.bookId!==id)
   },
//async remove(id){
 //await removeBook(id)
//},
   async  getData(){
       this.isloading =true
       if(this.hasMore&&this.isloading){ //有更多的时候获取数据
      let {hasMore,books} =  await pagination(this.offset);
      this.books = [...this.books,...books];  //获取的书放到书的属性上
      this.hasMore = hasMore;
      this.isloading = false;
      this.offset = this.books.length //维护偏移量，就是总书的长度
       }

     },
     more(){
         this.getData();
     },
     loadMore(){
         //卷去的高度   当前可见区域  总高
         //触发scroll事件 可能触发N次 先进来开定时器，下一次触发将上一次的定时器触发掉
         clearTimeout(this.timer)//防抖
     this.timer = setTimeout(() => {
         let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll
         if(scrollTop+clientHeight+20>scrollHeight){
             this.getData();
         }
        
     }, 60);
       
     }

 },
 computed:{},
 components: {MHeader},
 mounted() {
     let scroll = this.$refs.scroll //获取要拖拽的元素
     let top = scroll.offsetTop;
     let distance = 0
     let ismove = false;
     scroll.addEventListener('touchstart',(e) =>{
         //滑动条在最顶端时，并且当前盒子在顶端时候
         if(scroll.scrollTop !=0&&scroll.offsetTop !=top) return;
     let start =e.touches[0].pageY //手指点击的开始
     let move =(e)=>{
         ismove = true;
        let current = e.touches[0].pageY;
         distance = current - start ; //负的不要
        if(distance>0){
            if(distance<=50){
                 scroll.style.top =   distance+ top+'px'
            }else{
                distance = 50;
                scroll.style.top = top + 50+'px'
            }
             
        }else{//不在范围内 移除move和end事件
            scroll.removeEventListener('touchmove',move)
            scroll.removeEventListener('touchend',end)
        }
        
     }
     let end =(e)=>{
         if(!ismove)return
         ismove = false
           clearInterval(this.timer)
      this.timer =  setInterval(()=>{ //一共distance 每次-1
       if(distance<=0){
         clearInterval(this.timer)
         distance = 0;
         scroll.style.top =40+'px'
         
         scroll.addEventListener('touchmove',move)
     scroll.addEventListener('touchmove',end)
     this.books = []; //先清空数据
     this.offset = 0
     this.getData();
        return 
       }else{
         distance -=1;
         scroll.style.top = top+ distance+'px'}
        },1)
     }
     scroll.addEventListener('touchmove',move)
     scroll.addEventListener('touchmove',end)
   
     },false)
 },
}
</script>

<style scoped>
.content ul{
    padding:10px;
}
.content ul li{
   display:flex;
   padding-bottom:10px 0;
   border-bottom:1px solid #f1f1f1
}
.content ul li img{
  
 width:200px;  
    height: 200px;  
    max-width: 100%;  
    max-height:100%;   
}
.content h4{
   font-size :20px;
   line-height:35px;

}
.content p{
   color:red;
   line-height:25px;

}
.content b{
   color:green;
   line-height:25px;

}
.content button{
display:block;
width:3.75rem;
height:1.25rem;
background:orange;
color:white;
border:none;
border-radius:15px;
outline:none;
}
.more{
    margin:.625rem;
    background:#2afedd;
    height:1.875rem;
    line-height:1.875rem;
    text-align:center;
    font-size:1.5625rem;
}
</style>
