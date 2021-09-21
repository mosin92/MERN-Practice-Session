
 const http= require("http")
 const fs= require("fs");
 const server=http.createServer()

  server.on("request",(req,res)=>{
    // const data= fs.readFile("data.txt",(error ,data)=>{
    //     if(error) console.log(error)
    //     res.end(data.toString())
    // })

    // Second Method to read in Streaming formate

     const fsstream=fs.createReadStream("data.txt")
    //   fsstream.on('data',(chunckdata)=>{
    //       res.write(chunckdata)
    //   })

    //   fsstream.on("end",()=>{
    //       res.end()
    //   })
    //   fsstream.on("error" ,()=>{
    //     res.end("File is not found")
    //   })


    //Third ShortHand Method

    fsstream.pipe(res)
  })

  server.listen(8000,"127.0.0.1",()=>{
      console.log("Server is listening port 8000...")
  })