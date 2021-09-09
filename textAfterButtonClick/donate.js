const { wallet } = require('../state');

function printDonate(){
  return `
Если Вы хотите получать больше сигналов от премиум каналов, можете поддержать проект материально.

Наш кошелек USDT(TRC20):
*${wallet}*

Любая материальная помощь ускорит процесс покупки новых премиум подписок.
  `;
}

module.exports = printDonate;