// let http = require('http')
const express = require('express')
const app = express()
// const fs = require('fs')
// const path = require('path')
// const url = require('url')

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})
// let server = http.createServer(
//   (req,res) =>{
//     console.log(req)
//     const queryObj = url.parse(req.url, true).query;
//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=UTF8',
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "application/json;charset=utf-8"
//     })
//     // const name = queryObj.name;
//     // const age = queryObj.age;
//     // const sex = queryObj.sex;
//     // res.write(`服务器接受到提交： name：${name}, age: ${age}, sex: ${sex}`);
//     res.write(`服务器接受到提交： name：`);
//     res.end();
//   }
//     )

  app.post("/requset",function (req,res) {
    // console.log(req)
    // var callback = req.body;
    // res.send(callback + "({ name: '5'})")
    req.on('data',function(data){
      console.log(data)
      obj=JSON.parse(data);
      console.log(obj);
      res.send('数据已接收')
    })
  });


app.listen(8080, (req,res) =>{
  console.log('8080')
})
