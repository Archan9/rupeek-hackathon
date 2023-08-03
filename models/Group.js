const mongnoose=require('mongoose');

const groupSchema=mongnoose.Schema({
    groupName:{
        type: String,
        required: true,
    },
    userIds:[{
        type:mongnoose.Schema.Types.ObjectId,
        ref:'user',
    }]
})

module.exports=mongnoose.model('group',groupSchema);