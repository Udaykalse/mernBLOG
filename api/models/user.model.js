import mongoose from "mongoose";
// import defaultLogo from './../assets/default.webp'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String, 
    required: true,
    unique: true,
  }, 
  password: {
    type: String,
    required: true,
  },
  profilePicture:{
    type:String,
    default:'https://imgs.search.brave.com/GHPH9zd-nQbP6gOqyU8W-z-vsojwu7JHoPeVZroObt4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtUE5H/LVBob3RvLnBuZw',
  }
},
{ timestamps: true });
const User =mongoose.model('User',userSchema);

export default User;

