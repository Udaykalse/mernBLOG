import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

mongoose
  .connect(
   process.env.MONGO
  )
  .then(
    () => {
      console.log("Mongodb is connected ");
    }).catch(err=>{
        console.log(`Connection error ${err}`);
    });

const app = express();

app.listen(3001, () => {
  console.log("Server is  running on port 3001 !");
});
