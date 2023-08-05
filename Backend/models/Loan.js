const mongoose=require('mongoose');

const loanSchema=new mongoose.Schema({
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    loanType: {
        type: String,
        required: true,
    },
    loanStatus: {
        type: String,
        required: true,
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group',
    },
    lenderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    reason:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    emi: {
        type: Number,
    }
},
{timestamps: true});

module.exports=mongoose.model('loan',loanSchema);