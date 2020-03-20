// let http = require('http')
const express = require('express')
const app = express()
// const multiparty = require("multiparty")

// const multipart = require('connect-multiparty');
// const multipartMiddleware = multipart();
const formidable = require('formidable')

const fs = require('fs')
const path = require('path')
// const url = require('url')

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
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

  app.post("/requset", function (req,res) {
    // console.log(req)
    var form = new formidable.IncomingForm()
    form.uploadDir = "./image"
    form.parse(req, function(err, fields, files) {
      console.log('fields: ', fields, 'files: ', files,'扩展名')
      // console.log('扩展名', files.file, files.file)
      // fs.renameSync('./image', '/te')
      // let filePath = files.file.path
      // fs.rename(filePath, path.resolve(__dirname, './rest/'+files.file.name), ()=>{
      //   console.log('重写成功')
      // })

      res.send(fields)
    })
    // req.on('data',data=>{
    //   console.log(data)
    //   let datas = data.toString('utf8')
    //   // console.log(datas)
    //   res.send(datas)
    // })
    // console.log(req.body,req.files,req.files.file.path)
    // let file = JSON.stringify(req.files)
    // console.log(req.files, 99999999)
    // // let file = String.toString(req.files) 
    // fs.writeFile('./test.jpg', req.files,() =>{
    //   console.log('写入成功')
    // })
    // console.log(file, 232343)
    
    // ======================
    // req.on('data', function(data){
    //   console.log(data)
    //   obj=data.toString('utf8')
    //   console.log(obj.user)
    //   res.send({str:obj})
    // })


  });
  // app.use(multiparty({uploadDir:'/upload' }))
  
app.listen(8080, (req,res) =>{
  console.log('8080')
})
