//import framework from 'framework'
const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());


//DB CONNECTION

mongoose.connect("mongodb://localhost:27017/mynewdb",{
    useNewUrlParser:true,useUnifiedTopology:true,
},(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }else{
        console.log(" error")
    
    }
})
//SCHEMA

 const sch={
      name:String,
      email:String,
     id:Number
 }
const monmodel=mongoose.model("NEWCOL",sch);

 //POST

 app.post("/post",async(req,res)=>{
    console.log("inside post function"); 
    const data=new monmodel({
            name:req.body.name,
             email:req.body.email,
             id:req.body.id
         });

         const val=await data.save();
        res.json(val);
        //res.send("posted");
 })


//PUT

app.put("/update/:id",async(req,res)=>{

    let upid=req.params.id;
    let upname=req.body.name;
    let upemail=req.body.email;
    monmodel.findOneAndUpdate({id:upid},{$set:{name:upname,email:upemail}},{new:true},(err,data)=>{
        //if(err)
       // {
          //  res.send("ERROR")

       // }else{
            if(data==null)
            {
                res.send("nothing found")

            }else{
                res.send(data)
            }
    })
})
    
   // })


 //DELETE

 app.delete('/delete/:id',function(req,res){
    let deleteid=req.params.id;
    monmodel.findOneAndDelete(({id:deleteid}),function(err,docs){
        if(err)
        {
            res.send("ERRORRR")

        }
        else{
            if(docs==null)
        {
         res.send("wrong id")
        }
        else{
         res.send(docs);
        }
        res.send(docs);

        }
       
    })
 })


         app.listen(3001),()=>{
          console.log("on port 3000")


         }