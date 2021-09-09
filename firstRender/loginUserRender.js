const html = `*Здравствуйте!*
Вы уже подключены к каналу
`;

module.exports = function(bot, msg){
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Информация',
                        callback_data: 'info'
                    },
                    {
                        text: 'Донат',
                        callback_data: 'donate'
                    }
                ],
            ]
        }
    });
}