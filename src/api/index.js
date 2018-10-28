import axios from 'axios'

//增加默认请求路径
axios.defaults.baseURL = 'http://localhost:3001';
//拦截器
axios.interceptors.response.use((res)=>{
    return res.data   //在这里同一拦截结果 把结果处理成res.data
  })
//获取轮播图数据,返回的是promise对象
export let getSliders = () =>{
  return axios.get('/sliders');
};
//获取热门图书接口
export let getHotBook = () =>{
    return axios.get('/hot');
};
// 获取全部图书
export let getBooks = () =>{
  return axios.get('/book');
};

//删除某一本图书
export let removeBook = (id) =>{
  return axios.delete(`/book?id=${id}`);
};
//获取某一本书
export let findOneBook = (id) =>{
  return axios.get(`/book?id=${id}`)
}
//修改图书
export let updataBook = (id,data) =>{
  return axios.put(`/book?id=${id}`,data)
}
//添加图书
export let addBook = (data) =>{
  return axios.post('/book',data);
};
export let getAll = () =>{
  return axios.all([getSliders(),getHotBook()])
}
//根据偏移量 返回对应的数据
export let pagination = (offset)=> {
  return axios.get(`/page?offset=${offset}`)
}
//获取所有评论
export let getcomment = ()     =>{
  return axios.get('/comment')
}
//取得所有漫画
export let getcartoon = () =>{
  return axios.get('/cartoon');
};

// 获取全部图书
export let getFriends = () =>{
  return axios.get('/friend');
};