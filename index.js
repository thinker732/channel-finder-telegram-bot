process.env.NTBA_FIX_319 = 1;
let telegramBot=require('node-telegram-bot-api');
let bot=new telegramBot(process.env.TOKEN,{polling:true});

bot.onText(/\/test (.+)/,function(msg,match){
    let chatid=msg.chat.id;
    bot.sendMessage(chatid,'ok');
});

bot.on('message',(msg)=>{
  let chatid=msg.chat.id;
  let username=msg.chat.username;
  bot.sendMessage(chatid,'Message recu '+username);
  bot.sendMessage(chatid,"je suis en cours de build plus tard nous pourrons dialoguer")
})

bot.on('polling_error', (error) => {
    console.log(error.code);  // => 'EFATAL'
  });

  bot.on('webhook_error', (error) => {
    console.log(error.code);  // => 'EPARSE'
  });