
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/YoutubePlaylist" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Connection Successfully")
}).catch((error)=>{
    console.log(error)
})
mongoose.connection
  .once("open", function () {
    console.log("Connected to database successfuly");
  })
  .on("error", function (error) {
    console.log(`DB Connection error:`, error);
  });


  //Schema 
  const PlayListSchema= new mongoose.Schema({
      name:String ,
      videos:Number ,
      upload:{
          type:Date ,
          default:Date.now
      } ,
      author:String
  })

   
   // Model OR Collection  


   const PlayList= new mongoose.model("PlayList",PlayListSchema) //collection must be singular . Mongodb will add auto

   // Insert Document
   

     const createDocument = async()=>{
         try{
              const jsPlayList= new PlayList({
            name:"JavaScript" ,
            videos:15 ,
            author:"Mohsin Malik"
           })
           const NodePlayList= new PlayList({
            name:"NodeJs" ,
            videos:13 ,
            author:"Mohsin Malik"
           })
        
        
          const data=await PlayList.insertMany([jsPlayList,NodePlayList])
          console.log(data)
         }catch(error){
             console.log(error)
         }
     }

    //createDocument()

    // Get Data

     const getDocument=async () =>{
         const result= await PlayList.find({$and:[{author:"Mohsin Malik"} ,{videos:30}]}).select({name:1 ,author:1})
         console.log(result)
     }
     getDocument()

     