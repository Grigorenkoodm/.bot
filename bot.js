const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_API)
bot.start((ctx) => ctx.reply('Welcome'))
bot.on('message', (ctx)=>{
    if(ctx.message.location){
    
    }
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))