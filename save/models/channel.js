const mongoose=require('mongoose')

const channelSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    link:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:false
    },
    tags:{
        type:String,
        required:false
    },
    members:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    }
})

const Channel=mongoose.model('Channel',channelSchema)

module.exports=Channel
