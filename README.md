# hander.js
Библиотека JavaScript для взаимодействия с Discord API

## Информация
hander.js - это модуль Node.js, который позволяет легко взаимодействовать с Discord API.
 - Объектно-ориентированный
 - Эффективный
 - 100% покрытие Discord API
 
## Установка
Требуется Node.js 12.0.0 или новее.
```Node.js
npm install hander.js
```

## Пример использования
```Node.js
const Discord = require('hander.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Вы вошли как ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(msg.content === '!say') {
    msg.channel.send(msg.args);
  }
});

client.login('token');
```
