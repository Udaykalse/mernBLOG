import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

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
