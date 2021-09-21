
const express =require("express")

const app= express()

app.get("/" ,(req,res)=>{

     res.send("<h1>***********Hello from Express******** </h1>")
})

app.get("/about" ,(req,res)=>{

    res.send("<h1>***********Hello About Page******** </h1>")
})

app.listen(3000,"127.0.0.1",()=>{
    console.log("Listeining the port 3000 ....")
})