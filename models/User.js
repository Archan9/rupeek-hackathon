const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type: String,
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    creditScore:{
        type: String,
    },
    aadhaarNumber: {
        type: String,
    },
    kyc:{
        type: Boolean,
    },
    gold:{
        type: String,
    }
},
{timestamps: true});

module.exports=mongoose.model('user',userSchema);