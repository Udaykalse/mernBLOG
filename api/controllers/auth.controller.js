import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  try {
    if (
      !username ||  
      !password ||
      !email ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
    //   return res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400,"All fields are required"))
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ username,
         email, 
         
         password:hashPassword });

    await newUser.save();

    return res.status(201).json("User signup successfully");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};


export  const signin = async (req, res, next)=>{
  const { email, password } = req.body;
  if (!email || !password || email ===''|| password ==='') {
    next(errorHandler(400,'All  field must be filled'));
  
  }
  try{
    const validUser=await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,'User Not Found'))
    }
    const  ValidPassword = bcrypt.compareSync(password,validUser.password);
    if(!ValidPassword){
    return next(errorHandler(401,'Invalid Password'));
    }
    let token = jwt.sign(
        {_id : validUser._id },
        process.env.JWT_SECRET 
 
    );
    const {password:pass,...rest}=validUser._doc;
    res.status(200).cookie('Access_token',token, {httpOnly: true}).json(rest);
  }catch(error){
    next(error);
  }
}

export const google =async(req,res,next)=>{
  const {email,name,googlePhotoUrl}=req.body;
  try{
    const user=await User.findOne({email});
    if(user){
      const token =jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password, ...rest}=user._doc;
      res.status(200).cookie(
        'access_token',token,{
          httpOnly:true,

        }
      )
      .json(rest);
    }else{
      const generatePassword=Math.random().toString(36).slice(-8)+ Math.random().toString(36).slice(-8);
      const newUser = new User({
        username:name.toLowerCase().split(' ')+Math.random().toString(9).slice(-4),email,password:hashedPassword,profilePicture:googlePhotoUrl,
      })
       await newUser.save();
       consttoken =jwt.sign({id:newUser._id},process.env.JWT_SECRET);
       const  {password , ...otherData}=newUser._doc;
       res
       .status(200)
       .cookie('access_token',tooken,{
        httpOnly:true,
       })
       .json(res);
    }
  }catch(error){
    next(error)
  }

}