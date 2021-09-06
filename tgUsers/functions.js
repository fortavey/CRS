let users = [
  'IvanSergeevich1.',
  'Wind555.',
  'AKIANNA.',
  'jilezq.',
  'Wladich.',
  'Citgar.',
  'Ndrew777.',
  'Fedya240994.',
  'jesertep.',
  'MAX575.',
  'DimaSato.',
  'tron77.',
  'evgeny2_0.',
  'Chelo_vechestvo.',
  'cherrypashka84.',
  'Shelkunc4ik.',
  'igoryemelyanov.',
  'NITRATUS.',
  'yuliabobro.',
  'Nullex_tv.',
  'WillSmith8.',
  'OGEAZYE666.',
  'sattoriq.',
  'VolodyaPutin.',
  'LanySrk.',
  'Bigjktu.',
  'snbtip.',
  'ZOMBATOR.',
  'SSdMitr.',
  'Salam256.',
  'iDea301197.',
  'Evgenyr11.',
]

const text = `
Привет. Тебя когда то интересовал премиальный канал с сигналами cryptoHamster Premium?
У нас есть эта подписка, и мы дублируем все их сигналы для наших подписчиков.

Если интересно ознакомься детальнее:
Наш сайт - crypto-signal.ru
Наш канал - youtube.com/channel/UCNHZIs2p7Yd101km5CpEpFA

P.S. Любые подтверждения можешь запросить у нашего менеджера - @manager_cryptosignal
`;

// Поиск по нику

function findUser() {
  document.querySelector('.input-search input').value = users[0];
  users.shift();
}

// Вставить текст сообщения

function pasteMessage() {
  document.querySelector('div.input-message-input').textContent = text;
}

// Добавление ников в массив

function addUser(){
  if( document.querySelectorAll('.ChatExtra .title').length ){
    const userName = document.querySelector('.ChatExtra .multiline-item .title').textContent;
    if( !userList.includes(userName) ) {
      userList.push(userName);
      console.log(userName);
    }else{
      console.log('Дубликат');
    }
  }
}

// ^\d\d\d: ',
// "$