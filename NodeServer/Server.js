
const http = require("http")
const server= http.createServer((req,res)=>{
    res.end("Hello from Node Js Server")
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening port 8000 ...")
})