
const express=require("express");
const path=require("path");
const app=express();


const templatepath=path.join(__dirname,"../template")

app.set("views",templatepath)

app.set("view engine","hbs")

app.get("/",(req,res)=>{

    res.render("index.hbs",{name:"Mohsin Malik"})
})

app.get("/about",(req,res)=>{
res.render("about")
})
app.listen(8000,()=>{
    console.log("Listening Port 8000")
})