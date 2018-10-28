var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    if(req.url =="/fang"){
    fs.readFile("./test.html",(err,data)=>{
        res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
        res.end(data) 
    })}else  if(req.url =="/yuan"){
        fs.readFile("./haha.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data) 
        })}else{
            res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
            res.end("没有这个页面") 
        }
   
}).listen(3000)