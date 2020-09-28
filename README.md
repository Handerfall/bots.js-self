# bots.js-self
Библиотека JavaScript для запуска self-ботов и взаимодействия с Discord API
## Установка
Требуется Node.js 12.0.0 или новее.
```Node.js
npm install https://github.com/Handerfall/bots.js-self.git
```

## Пример использования
```Node.js
const hander = require("hander-bots.js");
const bots = [];
const tokens = ["token1","token2","token3"];
// Добавление ботов
hander.add(bots,tokens)
// Запуск ботов
hander.login(bots,tokens)
hander.on(bot())
function bot(){
    for(var a = 0; a < bots.length; a++){
        bots[a].on("message", msg => {
            if(msg.content.startsWith("!ping")){
                msg.channel.send("Pong!")
            }
        })
    }
}
```
# Функции
- add(bots) - Добавление ботов
- login(bots,tokens) - Запуск ботов
- on(function) - Добавление тригеров в ботов
- destroy(bots) - Выключение ботов
- reload(bots,tokens) - Перезапуск ботов
- kill() - Выключить процесс
- bots - Количество запущеных ботов
