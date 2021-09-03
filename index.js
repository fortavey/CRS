const TelegramBot = require('node-telegram-bot-api');
const userList = require('./userList');
const textObj = require('./text');
const TOKEN = require('./token');


const bot = new TelegramBot(TOKEN, {
    polling: true,
});

bot.on('message', (msg) => {

    if(msg.from.id == '1880184913') {
        const html = `${msg.text}`;
        
        userList.forEach(user => {
            bot.forwardMessage(user, msg.chat.id, msg.message_id);
        });
        
    }else {

        if( userList.includes(msg.from.id) ) {
            textObj.str = textObj.str2;
        }

        const isStar = msg.from.first_name.includes('*'); // Звёздочка в имени пользователя
        const name = isStar ? '' : msg.from.first_name;

        const html = `*Здравствуйте, ${name}
            
            ${textObj.str}
        `;
        bot.sendMessage(msg.chat.id, html, {
            parse_mode: 'Markdown'
        });

        console.log(msg.chat.id);

    }

    
});