<template>
 <div id="app">
<mheader back="true">储值</mheader>
<div class="save">您当前的余额为：NONE<br>
   输入你需要的书籍<input type="text" id="money" class="input1"></input><br>
   输入你需要的分页<input type="text" id="page" class="input1"></input><br>
 
    你所查询出来的图片为<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2256941066,1888914145&fm=26&gp=0.jpg">
      <button @click="sure" class="button">确定购买</button>
</div>

 </div>
</template>

<script>
import mheader from "../base/mheader"
import {mapState} from 'vuex'
import * as Types from '../store/mutations-types'
export default {

name:"app",
 data() {
 return {}
 },
 methods:{
     sure(){
     this.$store.commit(Types.ADD_MONEY)
     setTimeout(() => {
         alert('储值成功，返回到原页面')
          this.$router.push('./ehome')
     }, 2000);
    
     }
 },
 computed:{...mapState(['money'])},
 components: {mheader},
}
</script>

<style scoped>
.save{
    position:absolute;
    top:3.75rem;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.input1{
     
 width:10.25rem;height:1.25rem;display:inline-block;cursor:pointer;
 
}
</style>
