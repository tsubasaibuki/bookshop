<template>
 <div id="app">
<mheader back="true">书友</mheader>
<div class="friendList">您所拥有的好友：</div><br><br><br>
<ul>
    <li v-for="f in friendList">
        <img :src="f.icon" class="icon">
        <div class="fla">姓名:{{f.name}}</div><button @click="deletefriend(f.id)">删除</button>
       </li>
    </ul>
<br>

<div class="friendList">您可能感兴趣的好友 <button @click="getdata()" class="hobby">换一批</button>
    <ul>
<li v-for= "(friend,index) in friends" >
    
    <img :src="friend.icon" class="icon">
   <div class="fla"> <h1>姓名:{{friend.name}}</h1>
    <h2>爱好:{{friend.hobby}}</h2>
    <h3>个人签名:{{friend.label}}</h3>
     <button @click="addfriend(friend)">添加</button>
    </div>
    
</li>
    </ul>
    </div>
 </div>
</template>

<script>
import mheader from "../base/mheader"
import {getFriends} from '../api'
import * as Types from '../store/mutations-types'
import {mapState} from 'vuex'

export default {

name:"app",
 data() {
 return {friends:[]}
 },
 created(){
     this.getdata()
 },
 methods:{
addfriend(friend){
    this.$store.commit(Types.ADD_FRIEND,friend)
},
     async getdata(){
         this.friends = await getFriends()
     },
     deletefriend(id){
         this.$store.commit(Types.DEL_FRIEND,id)
     }
 },
 computed:{ ...mapState(['friendList'])},
 components: {mheader},
}
</script>

<style scoped>
.save{
    position:absolute;
    top:60px;
}
.friendList{
    position:relative;
    top:70px;

}
.icon{
    width:150px;
    border:1px ;
}
.fla{
display:inline-block
}
.fla button{
   
display:block;
width:3.75rem;
height:1.25rem;
background:orange;
color:white;
border:none;
border-radius:15px;
outline:none;

}
.hobby{
    display:block;
width:3.75rem;
height:1.25rem;
background:Blue;
color:white;
border:none;
border-radius:15px;
outline:none;
}
</style>
