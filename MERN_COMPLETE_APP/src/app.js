const express =require("express")
const app=express();
require("./Db/conn")
app.use(express.json())    // This line Must be after db connection 
const User=require("./ModelSchema/schema")
app.use(require("./Router/route"))



//To Listen Server Response
app.listen(8000,()=>{
    console.log("Listening port 8000...")
})

