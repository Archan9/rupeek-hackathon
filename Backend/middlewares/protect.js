const User=require('../models/User');
const jwt=require('jsonwebtoken');

exports.protect=async(req,res,next)=>{
    try {
        let token;
        if(req.headers.authorization&&req.headers.authorization.startsWith('JWT')){
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            throw new Error("User unauthorized!");
        }
        const verifiedToken=jwt.verify(token,process.env.JWT_SECRET);
        const user= await User.findOne({_id:verifiedToken.id});
        if(!user){
            throw new Error("User unauthorized!");
        }
        req.user=user;
        next();
    } catch (error) {
        console.log(error);
        next(new Error("Something went wrong!"));
    }
}