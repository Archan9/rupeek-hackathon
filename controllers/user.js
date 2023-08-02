const User=require('../models/User');
const resp=require('../utils/resp');
const twilio = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
const jwt=require('jsonwebtoken');


exports.sendotp=async(req,res)=>{
    try {
        // twilio.verify.v2.services
        //         .create({friendlyName: 'Rupeek'})
        //         .then(service => console.log(service.sid));
        const { phone } = req.body;
        await twilio.verify
            .services(process.env.SERVICE_ID)
            .verifications.create({
                to: `+91${phone}`,
                channel: "sms",
            });
        return resp(res,200,"Code sent");
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.verify=async(req,res)=>{
    try {
        const { phone, code } = req.body;
        const twilioResp = await twilio.verify
            .services(process.env.SERVICE_ID)
            .verificationChecks.create({
                to: `+91${phone}`,
                code: code,
            })
        if (twilioResp && twilioResp.valid == false) {
            return resp(res,400,"Wrong code");
        }
        let user = await User.findOne({ 
            phone,
         });
        if(!user){
            user=await User.create({
                phone,
            })
        }
        return resp(res,200,jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: process.env.EXPIRES}));
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.updateUser=async(req,res)=>{
    try {
        const options=req.body;
        const user=await User.findOneAndUpdate(
            {_id:req.user._id},
            options,
            {new:true});
            return resp(res,200,user);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}