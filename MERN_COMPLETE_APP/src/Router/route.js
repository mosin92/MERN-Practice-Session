const express = require("express")
const router=express.Router()
const User=require("../ModelSchema/schema")
const bcrypt= require('bcryptjs')
const jwt=require("jsonwebtoken")
const authentication=require("../Middleware/Authentication")
router.get("/",(req,res)=>{

     res.send("Hello from experss router")
})

router.post("/register",async(req,res)=>{
    const {name,email,password,cpassword}=req.body
    if( !name || !email || !password|| ! cpassword ){
        return res.status(422).json({error:"Please fill all the fields"})
    }
   try{
     const useremail= await User.findOne({email})
    if(useremail)
    {
        return res.status(422).json({error:422})
    }
      
   }catch(e){
       return res.status(400).json({error:"Error in Database "})
   }
    
    const user= new User ({name ,email ,password, cpassword});
    user.save().then(()=>{
        return res.status(201).json({message:"New User register Successfully"})
    }).catch(()=>{
        return res.status(500).json({error:"Error while registring user"})
    })
     
})

router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(400).json({error:400})    //"Please Fill all crediential"
        }

        const respose=await User.findOne({email})
        
        if(respose)
        {
            const isMatch=await bcrypt.compare(password,respose.password)
            const token=await respose.AuthToken()
            res.cookie("jwtoken",token,{
                expires: new Date(2000058900000) ,
                httpOnly:true
            })
            console.log(token)
            if(!isMatch)
            res.status(400).json({error:400})         //"Invalid credentials"
            else
            res.json({message:"Successfully Login"})
        }
        
        else{
            res.json({error:400})   //"Not user found with this email"
        }
    }catch(err){
        console.log(err)
    }
})

router.get("/about",authentication,(req,res)=>{
res.send("Hello from server")
})
module.exports=router