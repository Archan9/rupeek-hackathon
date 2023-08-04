const User=require('../models/User');
const Group=require('../models/Group');
const Loan=require('../models/Loan');
const resp=require('../utils/resp');
const C=require('../utils/constants');
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
        return resp(res,200,jwt.sign({id: user._id},process.env.JWT_SECRET));
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

exports.getAllUsers=async(req,res)=>{
    try {
        const users=await User.find({_id:{$ne:req.user?req.user._id:null}});
        return resp(res,200,users);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.createGroup=async(req,res)=>{
    try {
        let {groupName,phones}=req.body;
        phones=[...phones,req.user.phone];
        const users=await User.find({phone:{$in:phones}});
        const userIds=users.map((user)=>user._id);
        const group=await Group.create({
            groupName,
            userIds,
        })
        return resp(res,200,group);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllGroups=async(req,res)=>{
    try {
        const groups=await Group.find({
            userIds:req.user._id
        })
        .populate({path:'userIds'});
        return resp(res,200,groups);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getGroupById=async(req,res)=>{
    try {
        const group=await Group.findOne({
            _id: req.params.id,
            userIds: req.user._id,
        })
        .populate({path:'userIds'});
        return resp(res,200,group);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.createLoan=async(req,res)=>{
    try {
        let values=req.body;
        values.loanStatus=C.loanStatus.INITIATED;
        values.loanType=C.loanType.OPEN;
        values.borrower=req.user._id;
        const loan=await Loan.create(values);
        resp(res,201,loan);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.acceptLoan=async(req,res)=>{
    try {
        const loan=await Loan.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                loanStatus: C.loanStatus.PENDING,
                lenderId: req.user._id,
            },
            {
                new: true,
            },
        );
        return resp(res,200,loan);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllBorrowedLoans=async(req,res)=>{
    try {
        const loans=await Loan.find({
            borrower: req.user._id,
        })
        .populate('borrower');
        return resp(res,200,loans);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllInitiatedoans=async(req,res)=>{
    try {
        const loans=await Loan.find({
            borrower: req.user._id,
            loanStatus: C.loanStatus.INITIATED,
        })
        .populate('borrower');
        return resp(res,200,loans);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllPendingLoans=async(req,res)=>{
    try {
        const loans=await Loan.find({
            borrower: req.user._id,
            loanStatus: C.loanStatus.PENDING,
        })
        .populate('borrower')
        .populate('lenderId');
        return resp(res,200,loans);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllCompletedLoans=async(req,res)=>{
    try {
        const loans=await Loan.find({
            borrower: req.user._id,
            loanStatus: C.loanStatus.COMPLETED,
        })
        .populate('borrower')
        .populate('lenderId');
        return resp(res,200,loans);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}

exports.getAllLoansAsLender=async(req,res)=>{
    try {
        const loans=await Loan.find({
            lenderId: req.user._id,
        })
        .populate('borrower')
        .populate('lenderId');
        return resp(res,200,loans);
    } catch (error) {
        console.log(error);
        return resp(res,500,"Internal server error");
    }
}