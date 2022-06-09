const token = '5351305163:AAG6Q5kqrJ1Mo5PZOv70Y0NSR29zO5SBhzI';
const TelegramApi = require('node-telegram-bot-api');
const {startOptions} = require('./options.js');

const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description: 'Истина'},
    {command: '/info', description: 'Как тебя зовут'}
])

const start = () => {
    bot.on('message', msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start') {
            return bot.sendMessage(chatId, 'Выбирай', startOptions);
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}`);
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю : (')
    })
}

start()