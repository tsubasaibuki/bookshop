import * as Types from './mutations-types'
const mutations = {
[Types.ADD_CART](state,book){
     //book是添加的一本书,如果有这本书 累加的是数量，如果没有数量为1 放到cartlist中
     let  product = state.cartList.find(item=>item.bookId === book.bookId);
     if(product){
          product.bookCount+=1;
          //要更新掉原数组否则不会刷新
          state.cartList = [...state.cartList];
     }else{
         book.bookCount = 1;
         //将原有数据改变或者可以替换
         //用新数组替换掉老数组
         state.cartList = [...state.cartList,book]
        
     }
},
[Types.ADD_FRIEND](state,friend){
         let friendA = state.friendList.find(i=>i.id===friend.id)
         if(friendA){
         friendA.friendCount+=1
         }else{
           
             state.friendList = [...state.friendList,friend]
         }
},
[Types.DEL_FRIEND](state,id){
    state.friendList.forEach((friends,index)=>{
        if(friends.id === id){
            state.friendList.splice(index,1)
        }
    })
},
[Types.ADD_MESSAGE](state){
 state.name=document.getElementById('name').value
 state.email=document.getElementById('email').value
 state.sign=document.getElementById('sign').value
},
[Types.ADD_MONEY](state){
    state.money = document.getElementById('money').value

}
}
export default mutations