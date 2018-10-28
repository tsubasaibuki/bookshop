import modal from './notify.vue'
let notify ={ //需要在此对象中拥有一个install方法
    
};
//this.$notify('吃饭了吗',{delay:1000})
notify.install = function(Vue,options={delay:3000}){

Vue.prototype.$notify = function(message,opt={}){
          if(notify.el) return;
        options = {...options,...opt};//用自己调用插件时传递出来的属性，覆盖掉默认设置好的
        let v = Vue.extend(modal);//返回的的是一个构造函数的子类，参数是包含组件选项的对象
         let vm = new v;
         let odiv = document.createElement('div');//创造一个DIV将实例挂载到元素上
         vm.$mount(odiv);
         vm.msg = message
         document.body.appendChild(vm.$el);//把当前真实对象扔到实例上
         notify.el = vm.$el
         setTimeout(()=>{
           document.body.removeChild(vm.$el);//将实例的元素删除掉
           notify.el = null
         },options.delay)
    }
}
//导出这个包含install的对象，如果使用vue.use就会调用这个install方法
//
export default notify