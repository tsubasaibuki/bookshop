import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


export default new Router({
  routes: [
    {path: '/',
     redirect: '/home'},
    {path: '/home',
    component: ()=>import('../components/home.vue'),
    meta:{keepAlive:true,title:'首页'},
    
  },
    
    //this.$route.meta.keepAlive
    {path: '/list',
    component: ()=>import('../components/list.vue'),
    meta:{title:"列表"}},
    {path: '/father',
    component: ()=>import('../components/propfather.vue'),
    meta:{title:"父亲"}},
    {path: '/son',
    component: ()=>import('../components/emitson.vue'),
    meta:{title:"儿子"}},
    {path: '/detail/:bid',
    component: ()=>import('../components/detail.vue'),
     name:"detail",
    meta:{title:'细节'}},
    // /detail/1 {bid:1}路径参数 必须有但是可以随机
    {path: '/collect',
    component: ()=>import('../components/collect.vue'),
    meta:{title:'收藏'}
  },
    {path: '/add',
    component: ()=>import('../components/add.vue'),
    meta:{title:'增加'}},
    {path: '/column/:bid',
    component: ()=>import('../components/column.vue'),
    name:'column',
    meta:{title:'栏目'}
  },
    {path: '/ehome',
    component: ()=>import('../components/ehome.vue'),
    name:'ehome',
    meta:{title:'个人中心'}},
    {path: '/message',
    component: ()=>import('../components/message.vue'),
    name:'message',
    meta:{title:'信息中心'}},
    {path: '/friend',
    component: ()=>import('../components/friend.vue'),
    name:'friend',
    meta:{title:'书友'}},
    {path: '/save',
    component: ()=>import('../components/save.vue'),
    name:'save',
    meta:{title:'储值'}},
    {path: '/man',
    component: ()=>import('../components/man.vue'),
    name:'man',
    meta:{title:'男星'}},
    {path: '/woman',
    component: ()=>import('../components/woman.vue'),
    name:'woman',
    meta:{title:'女星'}},
    {path: '/clothes',
    component: ()=>import('../components/clothes.vue'),
    name:'clothes',
    meta:{title:'衣服'}},
    {path: '/cartoon',
    component: ()=>import('../components/cartoon.vue'),
    name:'cartoon',
    meta:{title:'漫画'}},
    {path: '/login',
    component: ()=>import('../components/login.vue'),
    name:'login',
    meta:{title:'登录'}},
    
    {path: '*',
     redirect: '/home'},

  ]
})
