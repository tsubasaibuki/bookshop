<template>
 <div id="app">
     <div class="night" v-show="nighton"></div>
     <mheader><slot>个人中心</slot></mheader>
     <div class="interface"> 
         
         <div class="message">
             <p class="login" @click=login()>登录/注册</p>
             <strong>会员名：{{name}}</strong><br>
             <strong>个性签名：{{sign}}</strong><br>
              <strong>余额：{{money}}</strong><br>
             <strong>等级：{{level}}</strong>
         </div>
     </div>
<div class="mes">
    <ul>
       <li @click=person()>个人信息</li>
       <li @click=friend()>书友</li>
       <li @click=save()>购买分页</li>
       <li @click=night()>夜间模式</li>
       <li @click=tips()>维护说明</li>
        <li @click=father()>父传子</li>
        <li>清除缓存</li>

    </ul>
</div>
 </div>
</template>

<script>
import mheader from "../base/mheader"
import {mapState} from 'vuex'
export default {

name:"app",
 data() {
 return {member:"",
    

         messages:[],
         nighton:false,

         }
 },
 methods:{
     person(){this.$router.push("/message")},
     friend(){this.$router.push("/friend")},
     save(){this.$router.push("/save")},
     night(){this.nighton=!this.nighton},
     tips(){alert("维护说明")},
     login(){this.$router.push("/login")},
     father(){this.$router.push("/father")},
 },
 computed:{ ...mapState(['email','sign','name','money','level'])},
 components: {mheader},
}
</script>

<style scoped>
.interface {
    height: 130px;
    width:100%;
    background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(#3399CC, #33FFCC); /* 标准的语法（必须放在最后） */
    z-index:1;
    margin:40px 0;
    
}
.icon{
    position:absolute;
    height:100px;
    background:white;
    border:1px solid;
    width:100px;
    margin: 20px 10px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}
.message{
    position:absolute;
    margin:0 12.5rem;;
    width:50%;
    z-index:9999;
    height:130px;
    
}
.login{
    font-weight:bold;
    text-align:right;
}
li{
    position:relative;
    top:-39px;
    width:100%;
    height:40px;
    background:#00FF99;
    text-align:center;
    border:1px solid;
    
}
.night{
    outline: rgba(0, 0, 0, 0.5) solid 10000px;
z-index: 9999999;
position: absolute;
}
</style>
