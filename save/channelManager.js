
require('./mongoose')

const Channel = require('./models/channel')
//const chant=require('./models/chat')

const getChannel=async ()=>{
    console.log('envoie de la liste')
    const channels=await Channel.find({})
    console.log('fetch okay')
    return channels
}

const addChannel=async ()=>{
    console.log('ajouter channel')
    const channel=new Channel({
        name:"test",
        link:"test2",
    })
    await channel.save()
    console.log("ok")
}

const getChannelByCategory=()=>{
    console.log('envoie de la liste des channels par categories')
}

module.exports={
    getChannel,
    addChannel,
    getChannelByCategory
}