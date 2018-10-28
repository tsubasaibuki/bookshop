<template>
  <div id="app">
    <transition name="fadeIn">
   <keep-alive>
     <!--需要缓存的-->
    <router-view v-if="$route.meta.keepAlive">
    </router-view>
   </keep-alive>
     </transition>
   <!--正常访问的-->
       <transition name="fadeIn">
     <router-view v-if="!$route.meta.keepAlive">
    </router-view>
     </transition>
    <tab></tab>
   <!-- <button @click="show">notify</button> -->
   <link rel="stylesheet" href="//at.alicdn.com/t/font_854448_1wadtmpw1ba.css">
  </div>
</template>

<script>
import tab from './base/tab.vue'
export default {
  data(){
    return{}
  },
  methods:{
  
  },
  computed:{},
  components:{
    tab
  }
  
}
</script>

<style>
*{margin:0;padding:0;}
ul,li{list-style:none}
a{text-decoration:none}
input,button{-webkit-appearance:none;}
.content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow:auto;}

.fadeIn-enter{
  opacity:0;
}
.fadeIn-enter-active{
  transition: all 0.3s linear;
}
.fadeIn-leave-active{
  transition: all 0.3s linear;
  opacity:0;
}
.line{
  flex-wrap:wrap;
  display:flex;
  width:100%;
  height:1px;
  background:#000066;
  border: solid #000066
}
</style>
