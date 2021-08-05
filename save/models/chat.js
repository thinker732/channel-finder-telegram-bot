const mongoose=require('mongoose')

//@see https://mongoosejs.com/docs/schematypes.html


const ChatSchema=new mongoose.Schema({
    chatid:{
        type:Number,
        required:true,
        trim:true
    },
    favs:[{
        channel:{
            type:mongoose.Schema.Types.ObjectId,
            required:false
        }
    }],
},
    {
        timestamps:true
    }
)

const Chat=mongoose.model('Chat',ChatSchema)

module.exports=Chat