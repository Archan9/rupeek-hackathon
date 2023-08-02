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
        type: Number,
    },
},
{timestamps: true});

module.exports=mongoose.model('user',userSchema);