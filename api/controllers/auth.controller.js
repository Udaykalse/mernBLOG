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