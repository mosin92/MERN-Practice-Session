
const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs")



const templatepath=path.join(__dirname,"../template")
const paritalpath=path.join(__dirname,'../template/partial')
hbs.registerPartials(paritalpath)
app.set("views",templatepath)

app.set("view engine","hbs")

app.get("/",(req,res)=>{

    res.render("index.hbs",{name:"Mohsin Malik"})
})

app.get("/about",(req,res)=>{
res.render("about")
})

app.get("*",(req,res)=>{
    res.status(500)
    res.render("404")
})
app.listen(8000,()=>{
    console.log("Listening Port 8000")
})