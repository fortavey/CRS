process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = require('./token');
const userList = require('./userList');
const myForwardMessage = require('./forwardMessage');
const loginUserRender = require('./firstRender/loginUserRender');
const notLoginUserRender = require('./firstRender/notLoginUserRender');
const pressButton = require('./buttons');

console.log('Bot is running...');


const bot = new TelegramBot(TOKEN, {
    polling: true,
});

bot.on('message', (msg) => {

    if(msg.from.id == '1880184913') {
        myForwardMessage(bot, msg, userList);
        return;
    }
    
    // Пользователь добавлен в список
    if( userList.includes(msg.from.id) ) {
        loginUserRender(bot, msg);
    }

     // Пользователь не добавлен в список
    else {
        notLoginUserRender(bot, msg);
    }
    
    // Обработка нажатия на кнопки
    pressButton(bot);

    console.log('User ' + msg.chat.id + ' send message to bot!');
});