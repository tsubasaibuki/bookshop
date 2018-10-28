<template>
    <div style="background:url('http://img2.imgtn.bdimg.com/it/u=1150711822,2358261856&fm=26&gp=0.jpg') no-repeat 5px 5px;">
        <div class="cen" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <input type="text" placeholder="请输入验证码"  v-model="yanzhengma">
            <input type="button" id="code" @click="createCode()"  v-model="checkCode"/> <br>
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="cen" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</template>
<script>
import {setCookie,getCookie} from '../../mock/cookies.js'
    export default{
        
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: '',
                checkCode:'',
                yanzhengma:''
            }
        }, methods:{
   ToRegister(){
    this.showRegister = true
    this.showLogin = false
},
ToLogin(){
    this.showRegister = false
    this.showLogin = true
}, login(){
        if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
        }else{
            let data = {'username':this.username,'password':this.password}
        
            this.$http.post('/api/user/selectUser',data).then((res)=>{
                console.log(res)
       
              if(res.data == -1){
                  this.tishi = "该用户不存在"
                  this.showTishi = true
              }else if(res.data == 0){
                  this.tishi = "密码输入错误"
                  this.showTishi = true
              }else{
                  this.tishi = "登录成功"
                  this.showTishi = true
                  setCookie('username',this.username,1000*60)
                
                  setTimeout(function(){
                      this.$router.push('/home')
                  }.bind(this),1000)
              }
          })
      }
    },register(){
            if(this.newUsername == "" || this.newPassword == ""){
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.newUsername,'password':this.newPassword}
                this.$http.post('/api/user/addUser',data).then((res)=>{
                    console.log(res)
                  
                    if(res.data == -1) {
                        this.tishi = "该账号已存在"
                        this.showTishi = true
                        this.username = ''
                        this.password = ''
                    }
                    else if(res.status == 200){
                        this.tishi = "注册成功"
                        this.showTishi = true
                        this.username = ''
                        this.password = ''
                  
                        setTimeout(function(){
                            this.showRegister = false
                            this.showLogin = true
                            this.showTishi = false
                        }.bind(this),2000)
                    }
                })
            }
        },createCode(){
  let code = ""; 
  let codeLength = 4;
  let random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
     'S','T','U','V','W','X','Y','Z');
  for(let i = 0; i < codeLength; i++) {
   let index = Math.floor(Math.random()*36);
   code += random[index];
  } 
  this.checkCode = code;
}
    }}
</script>
<style scoped>
    .cen{text-align:center;}
    input{display:block; 
    width:250px; 
    height:40px; 
    line-height:40px; 
    margin:0 auto; 
    margin-bottom: 10px; 
    outline:none; 
    border:1px solid pink;
     padding:10px; 
     box-sizing:border-box;}
    p{color:red;}
    button{ display:block;
    
        width:250px; height:40px; 
        line-height: 40px; 
        margin:0 auto; 
        border:none; 
        background-color:pink;
        color:#fff; font-size:16px; 
        margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
    #code{
        background: pink;
        color: white;
        font-size: 20px
    }
</style>
