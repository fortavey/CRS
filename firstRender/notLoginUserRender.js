const { TxID } = require('../state');

const html = `*Здравствуйте!*

Вы не подключены к каналу

_Для подключения нажмите кнопку "Cтать участником"_
`;

module.exports = function(bot, msg){
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Cтать участником',
                        callback_data: 'subscribe'
                    }
                ],
            ]
        }
    });
}
