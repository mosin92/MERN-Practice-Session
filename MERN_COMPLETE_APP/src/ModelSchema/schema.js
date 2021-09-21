
const mongoose=require("mongoose")
const bcrypt= require('bcryptjs')
const jwt=require("jsonwebtoken")
const UserSchema= new mongoose.Schema({
    name:{
        type:String ,
        required:true 
    }
    ,
    email:{
        type:String ,
        required:true
    } ,
    password:{
        type:String ,
        required:true
    } ,
    cpassword:{
        type:String ,
        required:true
    } ,
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

// Hashing the password
    UserSchema.pre('save',async function(next){
        if(this.isModified('password')){
            this.password=await bcrypt.hash(this.password,12)
            this.cpassword=await bcrypt.hash(this.cpassword,12)
        }
        next()
    })
    //Generate Auth Token
    UserSchema.methods.AuthToken= async function () {
        try{
            let usertoken= jwt.sign({_id:this._id},process.env.SECRET_KEY)
            this.tokens= this.tokens.concat({token:usertoken})
            await this.save()
            return usertoken
        }catch(E){

        }
    }
const User= mongoose.model('USER',UserSchema)

module.exports=User