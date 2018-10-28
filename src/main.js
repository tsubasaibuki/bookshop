// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'; //runtime不支持 template
import App from './App';
import router from './router';
import notify from './plugin/notify.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store';
import VueResource from 'vue-resource';
Vue.use(VueResource)
require('swiper/dist/css/swiper.css')
Vue.config.productionTip = false;
Vue.use(notify,{delay:2000})//使用带有install的对象
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
import gallery from 'img-vuer'
Vue.use(gallery, { 
  swipeThreshold: 150  // default 100 ,new in 0.12.0
})
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1886059489,1505510113&fm=200&gp=0.jpg',
  loading:'http://img.zcool.cn/community/01603b59ffcb72a801202b0c6dea07.gif',
  attempt:1
})
//在进入路由之前，每一次都会执行此方法
router.beforeEach(function (to,from,next){
   document.title = to.meta.title;
   if(to.path === '/list'){
  //   next({path:'/add'})
  next();
   }
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// render:(h)=>h(App)
// render:function(createElement){
  // return createElement(App)}
//