const renderInfo = require('./textAfterButtonClick/info');
const renderDonate = require('./textAfterButtonClick/donate');
const renderSubscribe = require('./textAfterButtonClick/subscribe');

module.exports = function(bot){

    bot.on('callback_query', query => {
        if(query.data === 'info'){
            bot.sendMessage(query.message.chat.id, renderInfo(), {
                parse_mode: 'Markdown',
                disable_web_page_preview: true,
            })
        }else if(query.data === 'donate'){
            bot.sendMessage(query.message.chat.id, renderDonate(), {
                parse_mode: 'Markdown'
            })
        }else if(query.data === 'subscribe'){
            bot.sendMessage(query.message.chat.id, renderSubscribe(), {
                parse_mode: 'HTML',
            })
        }

        console.log(`User ${query.from.first_name}(${query.from.id}) press button "${query.data}"`);
        
        bot.removeListener("callback_query")
    });
}