//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";
import connectDB from "./db/index.js";
dotenv.config({path:'./env'})

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at ${process.env.PORT}`)
        app.on("error",(error)=> {
            console.log("ERROR: ",error);
            throw error
        })
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed in index js",err);
})
















/*

import express  from "express";
const app=express();
(async()=>{
    try{
      await  mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("errror during connection: ",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`server running at port ${PORT}`)
       })
        
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()
*/