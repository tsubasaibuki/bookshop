
<template>
<div>
 <h3>{{message}}</h3>
 <h3>{{mes}}</h3>
  <h3>{{time}}</h3>
 </div>
</template>
<script>
 export default {
  data(){
   return{
    message:'',
    message1:'我是通过ref获得的属性',


   }
  },
  methods:{
   getMessage(m){
    this.message=m;
   }
  },  props:['time','mes'],
  mounted:function () {
      this.$emit('getmessage',"这是用EMIT子组件往父组件传的值")
  }
 }
</script>