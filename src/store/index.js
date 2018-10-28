import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
import getters from './getters'
import mutations from './mutations';
Vue.use(Vuex);

// 状态

let state = 
{cartList:[],
 friendList:[],
 name:"NONE", 
sign:"NONE", 
email:"NONE", 
money:"0",
level:"游客"
};
export default new Vuex.Store({
    state,
    mutations,
    getters,
    strict:false,
    plugins:[logger()]
})