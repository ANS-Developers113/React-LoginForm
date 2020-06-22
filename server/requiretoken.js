const jwt=require('jsonwebtoken');
const {jwtkey}=require('./keys');
const mongoose=require('mongoose');
const User=require('./Models/user');

async function verifyTheToken  (req, res, next)  {
  
  const token= await req.headers['bearer'];
  
  if(!token){
    res.send("Login First");
  }
  
  jwt.verify(token, jwtkey, async(err, payload)=>{
    if (err) {
      res.send("Login First");
    } 
    else{
      const{userid}=payload;
      const user=await User.findById(userid);
      req.user=user;
      next();
    }
   });
}

module.exports={verifyTheToken};