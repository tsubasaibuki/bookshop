<template>
 <div class="detail">
{{bid}}
<mheader :back="true">详情页面</mheader>
<div>
    <ul>
        <li>
        <label for="bookname">名称:{{name}}</label>
            <input type="text" v-model="book.bookName" id="name">
         </li>
         <li>
        <label for="bookInfo">邮箱:{{email}}</label>
            <input type="text" v-model="newemail" id="email">
        </li>
        <li>
        <label for="bookPrice">个性签名:{{sign}}</label>
            <input type="text" v-model.number="book.bookPrice" id="sign">
            </li>
            <li>
                   <button @click="updata">确认修改</button>
            </li>
        </ul>
</div>
 </div>
</template>

<script>
import mheader from '../base/mheader'
import {findOneBook,updataBook} from '../api'
import {mapState} from 'vuex'
import * as Types from '../store/mutations-types'
export default {

name:"app",
created(){ //页面已加载 需要根据id 发送信息
   this.getData();
},
watch:{
   $route(){ //只要路径变化 重新获取数据
       this.getData()
   }
},
 data() {
 return {book:{}}
 },
 methods:{
     async getData(){ //通过id找到某一项后付给book属性
    this.book =     await findOneBook(this.bid)
    //如果是空对象 需要跳转转回列表页
  Object.keys(this.book).length>0?void 0:this.$router.push('/list')
     },
      updata(){
     this.$store.commit(Types.ADD_MESSAGE)
         console.log(this.email)
 },
 },
 computed:{
     bid(){
return this.$route.params.bid //将路径参数的ID映射到BID上
     },
     ...mapState(['email','sign','name'])
     
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
</style>

