<template>
 <div>
  <h1>我是父组件！</h1>
  <emitson ref="msg"></emitson><!--通过ref来调用子组件的方法和属性-->
<emitson time="父级已经把值通过静态方法传送过来"></emitson><!--父传子-->
 <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
  <emitson :mes="a+b"></emitson>
 
  <!-- 用一个变量进行动态赋值。-->
  <emitson :mes="msg1"></emitson>
     <h1>{{title}}</h1>
    <emitson @getmessage= "showemit"></emitson>
 </div>

</template>

 
<script>
 /* ref偏向于索引调用子属性的方法和 
    prop 偏向于数据传递 不能调用子组件里的属性和方法*/
 import emitson from '../components/emitson.vue'
 export default {
  components: {emitson},
  mounted: function () {
   console.log( this.$refs.msg);
   this.$refs.msg.getMessage('我是通过ref调用子组件的方法得到的！') //ref调用了子组件的方法
   
 console.log(this.$refs.msg.message1)

  },data(){
      return{
          a:'我是子组件二！，我们是通过:mes动态传值过来的',
           b:'依然是父传子',
          msg1: '我们是通过:mes动态传值过来的，依然是父传子！',
          title:""
      }
  },
  methods:{
      showemit(title){
          this.title = title;
      }
  }


 }
</script>