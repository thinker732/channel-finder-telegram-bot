
/*fix some error*/
process.env.NTBA_FIX_319 = 1;



/*TOKEN should be define in config/dev.env*/

let telegramBot=require('node-telegram-bot-api');


const commands = require('./commands');
const channel=require('./save/channelManager')
let bot=new telegramBot(process.env.TOKEN,{polling:true});


bot.setMyCommands(commands)


//when chat start
bot.onText(/^\/start/,function(msg,match){
    let chatid=msg.chat.id;
    let username=msg.from.first_name
    console.log({msg})
    bot.sendMessage(chatid," WELCOME "+username);
});


bot.onText(/^\/getchannel/,(msg)=>{

    channel.getChannel();
})

bot.onText(/^\/addchannel/,(msg)=>{

    channel.addChannel();
})

bot.onText(/^\/command/,(msg)=>{

    bot.getMyCommands()
    .then((info)=>{
        console.log(info)
    })

})


bot.on('polling_error', (error) => {
    console.log(error.code);  // => 'EFATAL'
  });

  bot.on('webhook_error', (error) => {
    console.log(error.code);  // => 'EPARSE'
  });