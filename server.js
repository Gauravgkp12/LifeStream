const express=require('express');

// REST obj
const app=express();

//test route
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "welcom to our application",
    })
})

//port
const PORT=8080;

//listen
app.listen(PORT,()=>{
    console.log('Node Server is Running');
})