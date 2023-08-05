const mongnoose=require('mongoose');

const groupSchema=new mongnoose.Schema({
    groupName:{
        type: String,
        required: true,
    },
    userIds:[{
        type:mongnoose.Schema.Types.ObjectId,
        ref:'user',
    }]
},
{timestamps: true});

module.exports=mongnoose.model('group',groupSchema);