const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 5', () => {
  console.log('Executando Tarefa 1', new Date().getSeconds())
})