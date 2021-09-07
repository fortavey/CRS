process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const userList = require('./userList');
const textObj = require('./text');
const TOKEN = require('./token');
const myForwardMessage = require('./forwardMessage');

console.log('Bot is running...');

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

bot.on('message', (msg) => {
    let str = textObj.str;

    if(msg.from.id == '1880184913') {
        myForwardMessage(bot, msg, userList);
    }else {

        if( userList.includes(msg.from.id) ) {
            str = textObj.str2;
        }

        const isStar = msg.from.first_name.includes('*'); // Звёздочка в имени пользователя
        const name = isStar ? '' : msg.from.first_name;

        const html = `*Здравствуйте, ${name}
            
            ${str}
        `;
        bot.sendMessage(msg.chat.id, html, {
            parse_mode: 'Markdown'
        });

        console.log(msg.chat.id);

    }

    
});