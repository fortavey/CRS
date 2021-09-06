const userList = require('./marchList');
const hamsterList = require('./hamsterList');
const fs = require('fs');

const newArr = userList.filter( nik => !hamsterList.includes(nik) );

fs.writeFile('./filterList.txt', JSON.stringify(newArr), err => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Список записан в файл!');
})