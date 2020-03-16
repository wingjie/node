// let http = require('http')
const express = require('express')
const app = express()
// const multiparty = require("multiparty")

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
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

  app.post("/requset",multipartMiddleware, function (req,res) {
    // console.log(req.body,req.files,req.files.file.path)
    let file = JSON.stringify(req.files)
    // let file = String.toString(req.files) 
    console.log(file, 232343)
    res.send(file ,req.files.file.path)
  });
  // app.use(multiparty({uploadDir:'/upload' }))
  
app.listen(8080, (req,res) =>{
  console.log('8080')
})
