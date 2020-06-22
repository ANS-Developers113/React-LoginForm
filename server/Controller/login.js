const jwt=require('jsonwebtoken');
const {jwtkey}=require('../keys');
const User=require('../Models/user');

exports.checkuser=(req, res, next) =>{
    const { username, password } = req.body;
    User.find({username: username,password:password }).then((user) => { 
      //check if username and password exists
        if (user.length==0){
          return res.send("Invalid Username");
        }
        else{
          const obj=user[0]._id;
          const token=jwt.sign({userid:user[0]._id},jwtkey,{expiresIn:'30m'}); // create token using objectid
          res.send({token:token}); 
        }
    });
  };

exports.logoutUser=(req, res)=>{
  res.send("true");
  }