<template>
 <div id="app">
<mheader>添加</mheader>
<div class="content">
      <ul>

        <li>
        <label for="bookname">书的名称</label>
            <input type="text" v-model="book.bookName" id="bookName">
         </li>
         <li>
        <label for="bookInfo">书的信息</label>
            <input type="text" v-model="book.bookInfo" id="bookInfo">
        </li>
        <li>
        <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="book.bookPrice">
            </li>
                  <li>
        <label for="bookCover">书的封面</label>
            <input type="text" v-model="book.bookCover" id="bookCover">
         </li>
            <li>
                   <button @click="add">添加</button>
            </li>
        </ul>
</div>

 </div>
</template>

<script>
import mheader from '../base/mheader'
import {addBook} from '../api'
export default {

name:"app",
 data() {
 return {book:{}}
 },
 methods:{
     async add(){
         await addBook(this.book);
         this.$router.push('/list')
     }
 },
 computed:{},
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
</style>
