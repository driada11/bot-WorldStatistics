module.exports = {
    startOptions: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Статистика смертей', callback_data: '1'}],
            [{text: 'Статистика ДТП', callback_data: '2'}],
            [{text: 'Прирост населения в этом году', callback_data: '3'}]
        ]
    })
}}