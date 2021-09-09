const { wallet } = require('../state');

function renderSubscribe(){
  return `
Для оформления подписки Вам необходимо оплатить 20 USDT на этот кошелек:

<strong>USDT(TRC20):
${wallet}</strong>

<strong>!!! ВНИМАНИЕ !!!</strong>
Перевод должен быть именно по сети <strong>TRON (TRC20)</strong>

После оплаты вышлите нам адрес (TxID) своей транзакции в сообщении вот сюда - @manager\_cryptosignal

Когда мы проверим транзакцию Вы будете добавлены в Телеграм бот, где дублируются сигналы из премиум каналов.

<i>Если у Вас возникнут сложности напишите нашему менеджеру @manager\_cryptosignal или оставьте свой вопрос через форму на <a href='https://crypto-signal.ru'>сайте</a>.</i>
`;
}

module.exports = renderSubscribe;