let http = require('http');
let fs = require('fs');
let url = require('url');
let pageSize = 5;//每页显示五个
//获取轮播图接口 /sliders
let sliders = require('./sliders')
function read(cb){
   fs.readFile('./book.json','utf8',function(err,data){
     if(err || data.length == 0){
       cb([])//如果有错误 或者文件没长度 就是空数组
     }else{
       cb(JSON.parse(data))//将读出来的内容转化成对象
     }
   })
}
function write(data,cb){ //写入内容
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}
function readcomment(db1){
  fs.readFile('./bookcomment.json','utf8',function(err,data){
    if(err ||data.length ==0 ){
      db1([])
    }else{
      db1(JSON.parse(data))
    }
  })
}
function readfriends(fri){
  fs.readFile('./friends.json','utf8',function(err,data){
    if(err || data.length == 0){
      fri([])
    }else{
      fri(JSON.parse(data))
    }
  })
}
http.createServer((req,res)=>{

    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.setHeader("X-Powered-By",' 3.2.1')
   if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
 

      let {pathname,query} = url.parse(req.url,true);//把query转化成为对象
    if(pathname === '/page'){
      let offset = parseInt(query.offset) || 0 // 拿到当前前端传递的值
       read(function(books){
         //每次偏移量，在偏移的基础上增加五条
       let result = books.reverse().slice(offset,offset+pageSize)//数据倒叙
       let hasMore = true;
       if(books.length<=offset+pageSize){//已经显示的数目大于总条数
                    hasMore = false;
                    
       }
       res.setHeader('Content-Type','application/json;charset=utf8')
  
        res.end(JSON.stringify({hasMore:hasMore,books:result}))
     
      
       })
      
       return;
    }

      if(pathname ==='/sliders'){
             res.setHeader('Content-Type','application/json;charset=utf8')
     return  res.end(JSON.stringify(sliders))
      }
      if(pathname ==='/hot'){
        read(function(books){
      let hot =    books.reverse().slice(0,4);
      setTimeout(() => {
        res.end(JSON.stringify(hot))
      }, 3000);
     
        });
        return
      }
      if(pathname === '/book'){ //对书进行增删改查
        let id = parseInt(query.id) //取出的是字符串
        switch(req.method){
          case 'GET': //?id=1
           if(!isNaN(id)){ //查询一个
               read(function (books){
            let book =    books.find(item=>item.bookId===id)
            if(!book) book ={} //如果没找到则是undefined
            res.setHeader('Content-Type','application/json;charset=utf8')
            res.end(JSON.stringify(book))

               })
          }else{  //获取所有图书
              read(function(books){
                res.setHeader('Content-Type','application/json;charset=utf8')
                
                res.end(JSON.stringify(books.reverse()));
               })
           }

          break;
          case 'POST':
            let str = '';
            req.on('data',chunk=>{
                    str+=chunk
            });
            req.on('end', ()  => {
              let book =JSON.parse(str);
              read(function(books){
             book.bookId = book.length?books[books.length-1].bookId+1:1
             books.push(book);//将数据放到books中，books在内存中
             write(books,function(){
                 res.end(JSON.stringify(book));
             })
              })
            })
          break;
          case 'PUT':
          if(id){//获取当前要修改的ID
              let str ='';
              req.on('data',chunk=>{
                str+=chunk;
              });
              req.on('end',()=>{
                let book =JSON.parse(str);//book改成什么样子的
                read(function(books){
                  books =books.map(item=>{
                    if(item.bookId === id){//找到id相同的那本书
                      return book
                    }
                    return item;
                  })
                  write(books,function(){
                    res.end(JSON.stringify(book));
                  })
                });

              })
          }
          break;
          case 'DELETE':
read(function(books){
  books= books.filter(item=>item.bookId !== id);
  write(books,function(){
    res.end(JSON.stringify({}))//删除返回空对象
  })
});
          break;
        }

      }
      if(pathname === '/comment'){
        readcomment(function(todos){
          let i =Math.random()
          let end =Math.ceil(i*10+1)
          let start =Math.ceil(i*10+1)
          if(start>=end)
          { start = end;
            end = start+Math.ceil(i*10+1);
            let comment = todos.reverse().slice(start,end)
          res.setHeader('Content-Type','application/json;charset=utf8')
          res.end(JSON.stringify(comment))
          }
        })
        
      }
      if(pathname ==='/cartoon'){
        switch(req.method){
          case "GET":
        read(function(books){
          res.setHeader('Content-Type','application/json;charset=utf8')
                
          res.end(JSON.stringify(books.slice(10,12))); 
        });
        return
      }}
      if(pathname === '/friend'){
       switch(req.method){
         case'GET':
         readfriends(function(friends){
          res.setHeader('Content-Type','application/json;charset=utf8')
          let i =Math.random()
          let end =Math.ceil(i*10+1)
          let start =Math.ceil(i*10+1)
          if(start>=end)
          { start = end;
            end = start+Math.ceil(i*10+1);
            let friendr = friends.reverse().slice(start,end)
          res.end(JSON.stringify(friendr)); 
         }})
         break;
         case'POST':
         break;
         case'PUT':
         break;
         case'DELETE':
         break;
       }
      }

}).listen(3001)