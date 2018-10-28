<template>
 <div class="detail">

<mheader :back="true">详情页面</mheader>
<div>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <div class="det">
            <img :src="book.bookCover" class="Cover">
        <label for="bookname" class="bookname" >书的名称:{{book.bookName}}</label>
        <label for="bookhot" class="bookhot">书的热度:{{book.bookInfo}}</label>
         <label for="bookname" class="booksoso" v-show="booksoso">书的简介:{{book.booksoso}}<br>
         <p style="color:red;text-decoration:underline;" v-show="booksoso" @click=open()>展开</p>
         </label>
            <label for="bookname" class="booksoso" v-show="bookdetail">书的简介:{{book.bookdetail}}<br>
         <p style="color:red;text-decoration:underline;" v-show="bookdetail" @click=open()>缩进</p>
         </label><br>
         
 <div @click=read()>开始阅读</div> <div @click=access()>评论</div>
           <div style="overflow:hidden" v-show="picwatch">
       <img v-gallery:group1
          v-for="item in list1"
          :src="item.src"
          :key="item.src">
      </div>
        <div class="todolist" v-show="todolist">
 <input type="text"  v-model="newItem" @keyup.enter="addnew" class="input-group mb-3" placeholder="请输入评论">
<ul class="list-group">
      <li v-for="(todo,index) in  todos" class="list-group-item list-group-item-primary">{{todo.label}}  <br>from  {{todo.name}} </li>
  </ul>
        </div>
</div>
     
</div>

 </div>
</template>

<script>
import mheader from '../base/mheader'
import {findOneBook,updataBook,getcomment} from '../api'
export default {

name:"app",
created(){ //页面已加载 需要根据id 发送信息
   this.getData();
   this.getcomments()
},
watch:{
   $route(){ //只要路径变化 重新获取数据
       this.getData()
   }
},
 data() {
 return {book:{},
 comment:{},
 booksoso:true,
 bookdetail:false,
 picwatch:false,
 todolist:false,
 list1:[{src:"http://localhost:8080/static/3.jpg"},
 {src:"http://localhost:8080/static/2.jpg"},
 {src:"http://localhost:8080/static/1.jpg"}],
 todos:[{label:"reading",name:"ab"},{label:"reading",name:"cd"}],
 newItem:""
 }
 },
 methods:{
     async getData(){ //通过id找到某一项后付给book属性
    this.book =     await findOneBook(this.bid)
    //如果是空对象 需要跳转转回列表页
  Object.keys(this.book).length>0?void 0:this.$router.push('/list')
     },
     async updata(){
         await updataBook(this.bid,this.book);
         this.$router.push('/list');
 },
  async getcomments(){
        this.todos = await getcomment();
  },
 
 open(){
     this.booksoso=!this.booksoso;
     this.bookdetail=!this.bookdetail;
 },
 read(){
     this.picwatch=!this.picwatch
 },
  access(){
     this.todolist=!this.todolist
 },addnew(){
     this.todos.push({label:this.newItem})
     
 }
 
 },
 computed:{
     bid(){
return this.$route.params.bid //将路径参数的ID映射到BID上
     }
     
 },
 components: {mheader},
}
</script>

<style scoped lang="less">
ul{
    margin:50px 20px 0 20px;
    li{
        label{
            display:block;
            font-size:25px;
        }
        input{
            margin:10px 0;
            height:25px;
            width:100%;
        }
        button{
            display:block;
width:3.75rem;
height:1.25rem;
background:#2bbab2;
color:#fff;
border:none;

outline:none;
        }
    }
    }
.detail{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:#fff;
    z-index:100;
}
.Cover{
    width:12.25rem; 
    height:12.25rem;
    max-height:100%;
    max-width:100%;
}
.det{
    position:relative;
    top:40px;
}
.bookname{
    position:absolute;
    top:5px;
    
    
}
.bookhot{
    position:absolute;
    top:25px;
}
.booksoso{
    position:absolute;
    top:50px;
}

.tent{
       img{
           width:100px;
       }
    }
.inputa{
      margin:10px;}

.todo{
   background:#00ffff;
   border-radius:4px;
    border:1px solid pink;
    margin:2px;
}
</style>

