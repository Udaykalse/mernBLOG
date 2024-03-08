import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

 
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


app.use(express.json());

app.listen(3001, () => {
  console.log("Server is  running on port 3001 !");
});


app.use('/api/user',userRoute)

app.use('/api/auth',authRoute)